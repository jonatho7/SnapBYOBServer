############ START CHANGE FROM LOCAL DEVELOPMENT TO HOSTED SITE ##############
SERVER_URL_BASE = "http://think.cs.vt.edu/snap"
LOCAL_URL_BASE = "http://127.0.0.1:5000"


SITE_URL_BASE = SERVER_URL_BASE
# SITE_URL_BASE = LOCAL_URL_BASE

############ END CHANGE FROM LOCAL DEVELOPMENT TO HOSTED SITE ##############



from flask import Flask, abort, redirect, url_for, json
from flask import render_template, make_response
from flask import jsonify
from flask import request
from weatherservice import weatherservice
from reddit import reddit as red
from stockservice import stockservice
from twitterservice import twitter as twitterservice
from twitterservice import twitterHelperMethods as twitterHelpers
from locationservice import locationservice
from earthquakes import earthquakes as earthquakeservice
from sheetsservice import sheetsservice
from computeservice import computeservice as computeservice
import StringIO


# Uncomment these next lines for logging on the think.cs.vt.edu server.
import logging
logging.basicConfig(
   level=logging.WARNING,
   format='[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s',
   datefmt='%Y%m%d-%H:%M%p',
)

from functools import wraps, update_wrapper
from datetime import datetime


import sys
HEADER = {'User-Agent': 'CORGIS Weather library for educational purposes'}
PYTHON_3 = sys.version_info >= (3, 0)

if PYTHON_3:
    # from urllib.error import HTTPError
    import urllib.request as request
    # from urllib.parse import quote_plus
else:
    # from urllib2 import HTTPError
    import urllib2
    # from urllib import quote_plus




weatherservice.connect()
app = Flask(__name__)
weatherReport = "";











# For caching.
@app.after_request
def add_header(response):
    response.headers['Last-Modified'] = datetime.now()
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response








# (Start) Helper methods.

# If the current time that the user gets the weather report
# is at night, then forecasts will not have a "This Afternoon"
# and a "Tonight" forecast, but will only have a "Tonight"
# forecast. To fix this, the "Tonight" forecast will be copied
# and inserted at the beginning of the list.
def adjustForecastsForTime(forecasts):
    if (forecasts[0].get('period_name') == "Tonight"):
        forecasts.insert(0, forecasts[0])


def removeUnwantedCharacters(rawResponseValue):
    responseValue = ""
    firstCurly = rawResponseValue.find("{")
    firstBracket = rawResponseValue.find("[")

    if (firstCurly < firstBracket):
        responseValue = rawResponseValue[firstCurly:]
    else:
        responseValue = rawResponseValue[firstBracket:]
    return responseValue


def _get(urlString):
    """
    Internal method to convert a URL into it's response (a *str*).

    :param str urlString: the url to request a response from
    :returns: the *str* response
    """
    if PYTHON_3:
        req = request.Request(urlString, headers=HEADER)
        response = request.urlopen(req)
        return response.read().decode('utf-8')
    else:
        req = urllib2.Request(urlString, headers=HEADER)
        response = urllib2.urlopen(req)
        return response.read()


#(End) helper methods.






@app.route('/')
def index():
    return render_template('main/home.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learn')
def learn():
    return render_template('main/learn.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/about')
def about():
    return render_template('main/about.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/contact')
def contact():
    return render_template('main/contact.html', SITE_URL_BASE=SITE_URL_BASE)


# Learn Category
@app.route('/snap')
def snap():
    return render_template('snap.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learn/iteration')
def learnIteration():
    return render_template('learn/iteration.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learnIterationSnap')
def learnIterationSnap():
    return render_template('learn/iterationSnap.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learn/streamingData/stocks')
def learnStreamingDataStocks():
    return render_template('learn/streamingData/streamingStocks.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learnStreamingDataStocksSnap')
def learnStreamingDataStocksSnap():
    return render_template('learn/streamingData/streamingStocksSnap.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learn/visualizingData/earthquake')
def learnVisualizingDataEarthquake():
    return render_template('learn/visualizingData/earthquake.html', SITE_URL_BASE=SITE_URL_BASE)

@app.route('/learnVisualizingDataEarthquakeSnap')
def learnVisualizingDataEarthquakeSnap():
    return render_template('learn/visualizingData/earthquakeSnap.html', SITE_URL_BASE=SITE_URL_BASE)



# Testing
@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('test/hello.html', name=name)



# Internal API Calls.

@app.route('/fakeWeather')
def fakeWeather():
    return jsonify(temp=53)
    

@app.route('/weather')
def weather():
    locationString = request.args.get('location')
    weatherReport = weatherservice.get_report(locationString)
    #Logging posts will show up in terminal that Python Flask is running in.
    app.logger.debug(locationString)
    
    #Adjust the forecast for the user's query time.
    forecasts = weatherReport.get('forecasts')
    adjustForecastsForTime(forecasts)
    
    return jsonify(weatherReport=weatherReport)
    
@app.route('/redditPosts')
def redditPosts():
    subreddit = request.args.get('subreddit')
    posts = red.get_posts_as_json(subreddit,'hot',False)
    return jsonify(redditReport=posts)

@app.route('/redditComments')
def redditComments():
    postID = str(request.args.get('postID'))
    sort_mode='hot'
    max_depth=5
    max_breadth=5
    commentsList = red.get_comments(postID, sort_mode, max_depth, max_breadth)
    commentsJson = red.comments_to_json(commentsList)
    return jsonify(redditReport=commentsJson)
    #TODO. Can I return without using jsonify, bc it is already in json format?

@app.route('/stocks')
def stocks():
    try:
        stockQuery = str(request.args.get('stockQuery'))
        stockReport = stockservice.get_stock_information(stockQuery)
        return jsonify(stockReport=stockReport)
    except stockservice.StockServiceException:
        return jsonify(stockReport="")
    
@app.route('/twitter')
def twitter():
    #Get the request parameters.
    twitterFactor = str(request.args.get('twitterFactor'))
    twitterQuery = str(request.args.get('twitterQuery'))

    #Have twitter connect and run the search.
    twitterservice.connect()
    tweetsList = twitterservice.search(twitterQuery)
    twitterValue = ""

    if twitterFactor == "favorites":
        twitterValue = twitterHelpers.get_num_favorites(tweetsList)
    elif twitterFactor == "retweets":
        twitterValue = twitterHelpers.get_num_retweets(tweetsList)
    elif twitterFactor == "from person" or twitterFactor == "to person" or twitterFactor == "referencing person":
        twitterValue = len(tweetsList)

    #Form the response.
    twitterReport = {'twitterValue': twitterValue}
    app.logger.debug(twitterReport)

    #Return the results.
    return jsonify(twitterReport=twitterReport)

@app.route('/location')
def location():
    # Get the request parameters.
    address = str(request.args.get('address'))

    # Get the latitude and longitude values.
    locationReport = locationservice.get_lat_and_long(address)
    return jsonify(locationReport=locationReport)

@app.route('/earthquakes')
def earthquakes():
    # Get the request parameters.
    earthquakePeriod = str(request.args.get('earthquakePeriod'))

    # Get the latitude and longitude values.
    earthquakeReport = earthquakeservice.get_report(earthquakePeriod, 'all')
    return jsonify(earthquakeReport=earthquakeReport)


@app.route('/reportDataFromColumn')
def reportDataFromColumn():
    # Get the request parameters.
    columnNumber = str(request.args.get('columnNumber'))
    rowStart = str(request.args.get('rowStart'))
    rowEnd = str(request.args.get('rowEnd'))
    sheetNumber = str(request.args.get('sheetNumber'))
    sheetsURL = str(request.args.get('sheetsURL'))

    data = sheetsservice.get_column_data(columnNumber, rowStart, rowEnd, sheetNumber, sheetsURL)

    report = {'data': data }

    return jsonify(report=report)


@app.route('/urlRequestForClient')
def urlRequestForClient():
    #Get the request parameters.
    urlString = str(request.args.get('urlString'))
    app.logger.debug(urlString)

    #newURLString = "https://" + urlString
    newURLString = "http://" + urlString

    rawResponseValue = _get(newURLString)

    responseValue = removeUnwantedCharacters(rawResponseValue)

    #Form the response.
    urlReport = {'responseValue': responseValue}

    #Return the results.
    return jsonify(urlReport=urlReport)


@app.route('/computeservice/runTestCloudMethod2')
def runTestCloudCommand2():

    # pandas is not installed on the think server yet. So to avoid errors, I will put the import here for now.
    import pandas as pandas

    computeservice.setup_debugger(app.logger)

    # Run the select method.
    # csv_url = 'static/sampleData/fludata_small.csv'
    # csv_url = 'http://think.cs.vt.edu/snap/static/sampleData/fludata_small.csv'
    # csv_url = 'https://drive.google.com/file/d/0B-WWj_i0WSomYlptdDN5NFU1X0k/view?usp=sharing'. This one doesnt work.
    csv_url = 'https://drive.google.com/uc?export=download&id=0B-WWj_i0WSomYlptdDN5NFU1X0k'
    condition_field = 'REGION'
    condition_operator = '!='
    condition_value = 'Region 1'

    # Read in the csv file.
    csv_dataframe = pandas.read_csv(csv_url)

    # perform the select method.
    cloud_var_a_dataframe = computeservice.select_method(csv_dataframe, condition_field, condition_operator, condition_value)

    # setup the variables needed for the maximum method.
    field_name = 'ILITOTAL'
    return_type_string = 'entire row'  # possible values: 'entire row' OR 'value only'

    # perform the maximum method.
    cloud_var_b_dataframe = computeservice.get_maximum(cloud_var_a_dataframe, field_name, return_type_string)

    # convert the dataframe to a string.
    temp_var = StringIO.StringIO()
    cloud_var_b_dataframe.to_csv(temp_var)
    csv_output_string = temp_var.getvalue()

    # form a report and then return it.
    report = {'data': csv_output_string}
    return jsonify(report=report)



if __name__ == '__main__':
    app.debug = True
    app.run()

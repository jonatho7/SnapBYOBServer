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
import xml.etree.ElementTree as element_tree
from server_configuration import SITE_URL_BASE, SERVER_URL_BASE, LOCAL_URL_BASE



# Uncomment these next lines for logging on the think.cs.vt.edu server.
if SITE_URL_BASE == SERVER_URL_BASE:
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


# This method removes unwanted characters before the { or the [ in the JSON.
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


def urlRequest(urlString):
    newURLString = "http://" + urlString
    rawResponseJSONAsString = _get(newURLString)
    app.logger.debug(type(rawResponseJSONAsString))

    #Form the response.
    report = {'data': rawResponseJSONAsString}

    #Return the results.
    return report


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


@app.route('/runTestCloudMethod1')
def runTestCloudMethod1():
    # urlString = 'forecast.weather.gov/MapClick.php?lat=37.2295733&lon=-80.4139393&FcstType=json'
    urlString = 'snapdev.cs.vt.edu/api/returnTestData'

    report = urlRequest(urlString)

    # Testing purposes.
    # data = 15
    # report = {'data': data}
    # return jsonify(report=report)

    return jsonify(report=report)


# @app.route('/computeservice/runTestCloudMethod1')
# def runTestCloudMethod1():
#     report = 34
#     return jsonify(report = report)
#
#     # Testing purposes.
#     # data = 15
#     # report = {'data': data}
#     # return jsonify(report=report)
#     #return jsonReport



@app.route('/computeservice/runTestCloudMethod2')
def runTestCloudMethod2():

    # pandas is not installed on the think server yet. So to avoid errors, I will put the import here for now.
    import pandas as pandas

    computeservice.setup_debugger(app.logger)

    #Testing for XML Parsing.

    xml_string = '<project name="getFluPeakFor2014" app="Snap! 4.0, http://snap.berkeley.edu" version="1"><notes></notes><thumbnail>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAYAAAB1ovlvAAAFI0lEQVR4Xu2YvUuceRDHZ2OQcLuYwheOOyUEDCgB0cJo4ZEinIU2UfE66xT2QgI23omkDOG6+wNSXGHhgY2gKPgChy+HRVJoCMEmooJnIDHJhucpFpfE5GGcsJnhsyDq7m9mZz7fD8/jmisWi0XhAYEKEcghYIXI87YpAQREhIoS+KyAy8vLsrKyIsndOZfLfbPvdXV1MjIyUlEAvHllCXwi4OzsrDQ3N6umutbUKE9++1mqq3JfrL9y+ZLcerQpJycn6bmamhppaGhQvSdFvgmUCbiwsCD19fXqK96/93+RgZZ8JiKFhy9ke3s7vcIeHx9LV1dXpjoOxSJQJuD4+LgMDg6mUqyvr8v09LQkUs7Pz0tPT48sLi7K0dGRJLfovr4+6ejokHw+nz6fPJ79/qv03/gh/bnwx1N5u/iXVN++J+931+TD4Ut58/dYiV4i4MbGRkn29vb2WGTZJhOBMgHHxsZkaGgoLdzc3JTe3l6pra2VQqGQ3i4PDw/Tr+S1zs5O2d/fl0Sc5Lm9vT15/rA/FTD/YE1yV3+Ud//9I5KrkuL/r6Tqp5vy+s+7ZQKurq6WfucKmCmvcIfKBDw4OCjdFjUfQA4eD8md61cyQUqugEtLS+kVcGtrS0ZHRzPVcSgWgU8+hExOTkp3d7dqy+Tvx7a2tky1c3Nz6bnkyskn4UzIQh7i/4AhY/WzFAL6ySrkpAgYMlY/SyGgn6xCToqAIWP1sxQC+skq5KQIGDJWP0shoJ+sQk6KgCFj9bMUAvrJKuSkCBgyVj9LIaCfrEJOioAhY/WzFAL6ySrkpAgYMlY/SyGgn6xCToqAIWP1sxQC+skq5KQIGDJWP0shoJ+sQk6KgCFj9bMUAvrJKuSkCBgyVj9LIaCfrEJOioAhY/WzFAL6ySrkpAgYMlY/SyGgn6xCToqAIWP1sxQC+skq5KQIGDJWP0shoJ+sQk6KgCFj9bMUAvrJKuSkCBgyVj9LIaCfrEJOioAhY/WzFAL6ySrkpAgYMlY/SyGgn6xCToqAIWP1sxQC+skq5KQIGDJWP0shoJ+sQk6KgCFj9bMUAvrJKuSkCBgyVj9LIeA5WbW2tsrExIQMDw/7SdPhpAj4hdAGBgZKr+7s7MjMzIw0NTU5jPn7HRkBv5LNWQnPHj09PU2F5HExAgiIgBcz6ILVCJjxFry7u5te8RobGy+InPKzBBDwHB9aWlpkampKzrsFo5ENAQS04UgXJQEEVIKjzIYAAtpwpIuSAAIqwVFmQwABbTjSRUkAAZXgKLMhgIA2HOmiJICASnCU2RBAQBuOdFESQEAlOMpsCCCgDUe6KAkgoBIcZTYEENCGI12UBBBQCY4yGwIIaMORLkoCCKgER5kNAQS04UgXJQEEVIKjzIYAAtpwpIuSAAIqwVFmQwABbTjSRUkAAZXgKLMhgIA2HOmiJICASnCU2RBAQBuOdFESQEAlOMpsCCCgDUe6KAkgoBIcZTYEENCGI12UBBBQCY4yGwIIaMORLkoCCKgER5kNAQS04UgXJQEEVIKjzIYAAtpwpIuSAAIqwVFmQwABbTjSRUkAAZXgKLMhgIA2HOmiJICASnCU2RBAQBuOdFESQEAlOMpsCCCgDUe6KAkgoBIcZTYEENCGI12UBBBQCY4yGwIIaMORLkoCCKgER5kNAQS04UgXJQEEVIKjzIYAAtpwpIuSAAIqwVFmQwABbTjSRUkAAZXgKLMhgIA2HOmiJICASnCU2RBAQBuOdFES+Aiq4Ne3E8MQOwAAAABJRU5ErkJggg==</thumbnail><stage name="Stage" width="480" height="360" costume="0" tempo="60" threadsafe="false" lines="round" codify="false" scheduled="false" id="1"><pentrails>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFoCAYAAACPNyggAAAOhUlEQVR4Xu3VwQkAAAjEMN1/abewn7jAQRC64wgQIECAAIF3gX1fNEiAAAECBAiMAHsCAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQIHLFxAWmhEwHPAAAAAElFTkSuQmCC</pentrails><costumes><list id="2"></list></costumes><sounds><list id="3"></list></sounds><variables></variables><blocks></blocks><scripts></scripts><sprites><sprite name="Sprite" idx="1" x="0" y="0" heading="90" scale="1" rotation="1" draggable="true" costume="0" color="80,80,80" pen="tip" id="8"><costumes><list id="9"></list></costumes><sounds><list id="10"></list></sounds><variables></variables><blocks></blocks><scripts><script x="29" y="38"><block s="receiveGo"></block><block s="doBroadcastAndWait"><l>defineCloudMethod</l></block><block s="doSetVar"><l>results</l><block s="doRunCloudMethod"><l>getFluPeakForYear</l><list><l>hosted csv file url</l><l>2014</l></list></block></block></script><script x="29" y="172"><block s="receiveMessage"><l>defineCloudMethod</l></block><block s="doDefineCloudMethod"><l>getFluPeakForYear</l><list><l>data_source</l><l>year</l></list><script><block s="doSetCloudVariable"><l>a</l><block s="reportDataSelector"><l><option>all fields</option></l><block s="reportDataCondition"><l>YEAR</l><l><option>=</option></l><block s="doGetMethodParameter"><l>year</l></block></block><l></l><block s="doGetMethodParameter"><l>data_source</l></block></block></block><block s="doSetCloudVariable"><l>b</l><block s="reportDataMaximum"><l><option>maximum</option></l><l>ILITotal</l><block s="doGetCloudVariable"><l>a</l></block><l><option>entire row</option></l></block></block><block s="doCloudReport"><block s="doGetCloudVariable"><l>b</l></block></block></script></block></script></scripts></sprite><watcher var="results" style="normal" x="10" y="10" color="243,118,29"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks></blocks><variables><variable name="results"><l>450</l></variable></variables></project>'

    root = element_tree.fromstring(xml_string)

    # mine = root.find('stage').get('width')

    first_block = root.find('stage').find('sprites').find('sprite').find('scripts').find('script').find('block').get('s')
    app.logger.debug(first_block)



    if False:

        # Run the select method.
        # csv_url = 'static/sampleData/fludata_small.csv'
        # csv_url = 'http://think.cs.vt.edu/snap/static/sampleData/fludata_small.csv'
        # csv_url = 'https://drive.google.com/file/d/0B-WWj_i0WSomYlptdDN5NFU1X0k/view?usp=sharing'. This one doesnt work.
        # csv_url = 'https://drive.google.com/uc?export=download&id=0B-WWj_i0WSomYlptdDN5NFU1X0k'  # Flu Data Small CSV
        csv_url = 'https://drive.google.com/uc?export=download&id=0B-WWj_i0WSomaUkwQVpYenlRWm8'  # ILINET-All Regions CSV
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

    #Testing purposes.
    report = {'data': 15}
    return jsonify(report=report)


if __name__ == '__main__':
    app.debug = True
    app.run()

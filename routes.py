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
    from urllib.error import HTTPError
    import urllib.request as request
    from urllib.parse import quote_plus
else:
    from urllib2 import HTTPError
    import urllib2
    from urllib import quote_plus




weatherservice.connect()
app = Flask(__name__)

# Server Variables.
weatherReport = ""
user_cloud_variables = {}
server_cloud_variables = {}








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



# Data Tools Blocks - Start

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

@app.route('/dataProcessing/doSetCloudVariable')
def doSetCloudVariable():
    # Get the request parameters.
    user_id = str(request.args.get('user_id'))
    isValueAReferenceIndex = str(request.args.get('isValueAReferenceIndex'))
    variable_name = str(request.args.get('variable_name'))
    variable_value = str(request.args.get('variable_value'))

    # Get the user setup with a user_id if they need one.
    if user_cloud_variables.get(user_id) is None:
        user_cloud_variables[user_id] = {}

    app.logger.debug("variable_value type")
    app.logger.debug(type(variable_value))
    app.logger.debug(variable_value)

    app.logger.debug(isValueAReferenceIndex)
    app.logger.debug(type(isValueAReferenceIndex))

    # If the value is not a reference index, simply store the value.
    if isValueAReferenceIndex == "false":
        # Store the variable on the server.
        user_cloud_variables[user_id][variable_name] = variable_value
    else :
        # The value is a reference index, meaning the variable is already stored on the cloud server.
        variable_reference_index = variable_value;
        variable_reference = server_cloud_variables[user_id][variable_reference_index]
        user_cloud_variables[user_id][variable_name] = variable_reference

    # Return a report.
    report = {'data': 'success'}
    return jsonify(report=report)


@app.route('/dataProcessing/doRetrieveDataFromCloudVariable')
def doRetrieveDataFromCloudVariable():
    #Get the request parameters.
    user_id = str(request.args.get('user_id'))
    variable_name = str(request.args.get('variable_name'))
    variable_value = None

    # If variable_name is a string or a number, then proceed.
    if isinstance(variable_name, str) or isinstance(variable_name, (int, long, float)):
        if user_cloud_variables.get(user_id).get(variable_name) is not None:
            variable_value_object = user_cloud_variables.get(user_id).get(variable_name)
            if isinstance(variable_value_object, str) or isinstance(variable_value_object, (int, long, float)):
                # variable_value is simply a string or a number. Just return it.
                variable_value = user_cloud_variables[user_id][variable_name]
                report = {'data': variable_value, 'wasValueRetrieved': True}
                return jsonify(report=report)
            elif isinstance(variable_value_object, dict):
                if (variable_value_object.get('variable_type') is not None) and (variable_value_object.get('variable_contents') is not None):
                    if variable_value_object.get('variable_type') == "dataframe":
                        variable_value = user_cloud_variables[user_id][variable_name]['variable_contents']

                        # Now convert the dataframe to a string, to send it back to the client.
                        temp_var = StringIO.StringIO()
                        variable_value.to_csv(temp_var)
                        csv_output_string = temp_var.getvalue()

                        report = {'data': csv_output_string, 'wasValueRetrieved': True}
                        return jsonify(report=report)
        else:
            report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The variable '" + variable_name + "' was not found"}
            return jsonify(report=report)
    else:
        report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The variable name must be a string or a number"}
        return jsonify(report=report)




    # try:
    #     variable_value = user_cloud_variables[user_id][variable_name]
    #     report = {'data': variable_value, 'wasValueRetrieved': True}
    # except KeyError:
    #     report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The variable '" + variable_name + "' was not found"}
    #


    # return jsonify(report=report)


@app.route('/dataProcessing/select')
def dataProcessingSelect():
    # pandas is only required for a few of the data processing operations.
    import pandas as pandas

    # Setup the debugger.
    computeservice.setup_debugger(app.logger)

    # Get the request parameters.
    user_id = str(request.args.get('user_id'))
    isSelectAllFields = str(request.args.get('isSelectAllFields'))
    selectedFields = str(request.args.get('selectedFields'))
    condition_field = str(request.args.get('conditionField'))
    condition_operator = str(request.args.get('conditionOperator'))
    condition_value = str(request.args.get('conditionValue'))
    filterJSON = str(request.args.get('filterJSON'))
    csv_url = str(request.args.get('dataSourceCSVString'))

    # Setup the parameters.
    # condition_field = 'YEAR'
    # condition_operator = '=='
    # condition_value = '2014'
    # csv_url = 'https://drive.google.com/uc?export=download&id=0B-WWj_i0WSomaUkwQVpYenlRWm8'  # ILINET-All Regions CSV

    # Read in the csv file.
    try:
        csv_dataframe = pandas.read_csv(csv_url)
    except KeyError:
        pass
    except IOError as e:
        report = {'errorMessage': e.message}
        return jsonify(report=report)

    # perform the select method.
    cloud_var_a_dataframe = computeservice.select_method(csv_dataframe, condition_field, condition_operator, condition_value)

    app.logger.debug(cloud_var_a_dataframe)

    # Store this result on the server somewhere, which can be accessed later.
    # variable_reference_index counts the number of variables this user has created.
    # This number will be used to reference a particular variable that was created earlier.
    if server_cloud_variables.get(user_id) is None:
        server_cloud_variables[user_id] = {}
        server_cloud_variables[user_id]['variable_reference_index'] = 0
    else:
        server_cloud_variables[user_id]['variable_reference_index'] = (server_cloud_variables[user_id]['variable_reference_index'] + 1)

    # Create variable_reference_index
    variable_reference_index = str(server_cloud_variables[user_id]['variable_reference_index'])

    # Store the contents inside server_cloud_variables.
    server_cloud_variables[user_id][variable_reference_index] = {}
    server_cloud_variables[user_id][variable_reference_index]['variable_type'] = 'dataframe'
    server_cloud_variables[user_id][variable_reference_index]['variable_contents'] = cloud_var_a_dataframe


    # form a report with a reference to the variable on the cloud and then return it.
    data = {'variable_reference_index': variable_reference_index, "errorMessage": None}
    report = {'data': data}
    return jsonify(report=report)






# Data Tools Blocks - End








@app.route('/runTestCloudMethod1')
def runTestCloudMethod1():
    # urlString = 'forecast.weather.gov/MapClick.php?lat=37.2295733&lon=-80.4139393&FcstType=json'
    urlString = 'snapdev.cs.vt.edu/api/returnTestData'

    import requests
    data = requests.get('http://snapdev.cs.vt.edu/api/returnTestData').content
    app.logger.debug('data')
    app.logger.debug(data)

    #report = urlRequestWithoutHeaders(urlString)

    # Testing purposes.
    # data = 15
    # report = {'data': data}
    # return jsonify(report=report)

    report = {'data': data}

    return jsonify(report=report)


@app.route('/computeservice/runTestCloudMethod2')
def runTestCloudMethod2():
    # pandas is only required for a few of the data processing operations.
    import pandas as pandas

    # Setup the debugger.
    computeservice.setup_debugger(app.logger)

    # Get the request parameters.
    project_xml_string = str(request.args.get('project_xml_string'))
    app.logger.debug(project_xml_string)

    # Turn the string into an xml object.
    project_xml = element_tree.fromstring(project_xml_string)

    # mine = root.find('stage').get('width')

    # first_block = project_xml.find('stage').find('sprites').find('sprite').find('scripts').find('script').find('block').get('s')
    # first_script = project_xml.find('stage').find('sprites').find('sprite').find('scripts').find('script')

    app.logger.debug('before')
    # Select all of the blocks that have the attribute s=doDefineCloudMethod.
    for block in project_xml.findall(".//*[@s='doDefineCloudMethod']"):
        app.logger.debug('block=')
        app.logger.debug(block)

        # Select the cloud method name
        cloud_method_name = block[0].text
        app.logger.debug('cloud_method_name=')
        app.logger.debug(cloud_method_name)

        # Select the parameter names.
        parameter_names_list = []
        for parameter_l in block[1].findall('l'):
            parameter_name = parameter_l.text
            parameter_names_list.append(parameter_name)
        app.logger.debug('parameter_names_list=')
        app.logger.debug(parameter_names_list)

        # Select the server name.
        server_name = block[2].text
        app.logger.debug('server_name=')
        app.logger.debug(server_name)

        # Select the scripts within the doDefineCloudMethod C-block.
        block_script = block[3]

        # Iterate over all of the blocks in the script.
        for block_nested1 in block_script.findall('block'):

            # Get the block name
            block_nested1_name = block_nested1.get('s')  # doSetCloudVariable. #TODO. Go to this method.
            app.logger.debug('block_nested1_name=')
            app.logger.debug(block_nested1_name)


            if block_nested1_name == "doSetCloudVariable":
                # Get the cloud_variable_name
                block_nested1_cloudvarname = block_nested1[0].text
                app.logger.debug('cloudvarname=')
                app.logger.debug(block_nested1_cloudvarname)

                # Get the cloud_variable assign to value, which is probably another block.
                block_nested1_cloudvarvalue = block_nested1[1]
                app.logger.debug('cloudvarvalue=')
                app.logger.debug(block_nested1_cloudvarvalue)



    app.logger.debug('after')
    define_blocks = project_xml.findall('block')



    # Runs a cloud computation.


    # Run the select method.
    csv_url = 'https://drive.google.com/uc?export=download&id=0B-WWj_i0WSomaUkwQVpYenlRWm8'  # ILINET-All Regions CSV
    condition_field = 'YEAR'
    condition_operator = '=='
    condition_value = '2014'

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

    # Testing purposes.
    # report = {'data': 15}
    # return jsonify(report=report)


@app.route('/api/returnTestData')
def returnTestData():
    data = 25
    report = {'data': data }
    return jsonify(report=report)




if __name__ == '__main__':
    app.debug = True
    app.run()

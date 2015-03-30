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
    

@app.route('/api/dataservice/weather')
def weather():
    locationString = request.args.get('location')
    weatherReport = weatherservice.get_report(locationString)
    #Logging posts will show up in terminal that Python Flask is running in.
    app.logger.debug(locationString)
    
    #Adjust the forecast for the user's query time.
    forecasts = weatherReport.get('forecasts')
    adjustForecastsForTime(forecasts)
    
    return jsonify(weatherReport=weatherReport)
    
@app.route('/api/dataservice/redditPosts')
def redditPosts():
    subreddit = request.args.get('subreddit')
    posts = red.get_posts_as_json(subreddit,'hot',False)
    return jsonify(redditReport=posts)

@app.route('/api/dataservice/redditComments')
def redditComments():
    postID = str(request.args.get('postID'))
    sort_mode='hot'
    max_depth=5
    max_breadth=5
    commentsList = red.get_comments(postID, sort_mode, max_depth, max_breadth)
    commentsJson = red.comments_to_json(commentsList)
    return jsonify(redditReport=commentsJson)
    #TODO. Can I return without using jsonify, bc it is already in json format?

@app.route('/api/dataservice/stocks')
def stocks():
    try:
        stockQuery = str(request.args.get('stockQuery'))
        stockReport = stockservice.get_stock_information(stockQuery)
        return jsonify(stockReport=stockReport)
    except stockservice.StockServiceException:
        return jsonify(stockReport="")
    
@app.route('/api/dataservice/twitter')
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

@app.route('/api/dataservice/location')
def location():
    # Get the request parameters.
    address = str(request.args.get('address'))

    # Get the latitude and longitude values.
    locationReport = locationservice.get_lat_and_long(address)
    return jsonify(locationReport=locationReport)

@app.route('/api/dataservice/earthquakes')
def earthquakes():
    # Get the request parameters.
    earthquakePeriod = str(request.args.get('earthquakePeriod'))

    # Get the earthquake report.
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

@app.route('/api/dataservice/urlRequestForClient')
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

@app.route('/api/cloudvariables/doSetCloudVariable')
def doSetCloudVariable():
    # Get the request parameters.
    user_id = str(request.args.get('user_id'))
    isValueAReferenceIndex = str(request.args.get('isValueAReferenceIndex'))
    variable_name = str(request.args.get('variable_name'))
    variable_value = str(request.args.get('variable_value'))

    # Get the user setup with a user_id if they need one.
    if user_cloud_variables.get(user_id) is None:
        user_cloud_variables[user_id] = {}


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


@app.route('/api/cloudvariables/doRetrieveDataFromCloudVariable')
def doRetrieveDataFromCloudVariable():
    #Get the request parameters.
    user_id = str(request.args.get('user_id'))
    variable_name = str(request.args.get('variable_name'))
    variable_value = None

    # If variable_name is a string or a number, then proceed.
    if isinstance(variable_name, str) or isinstance(variable_name, (int, long, float)):
        # Check the variable_name - Start
        if user_cloud_variables.get(user_id) is None:
            # There isn't a user_id because no variables have been added yet . Return an error.
            report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The cloud variable '" + variable_name + "' was not found"}
            return jsonify(report=report)
        if user_cloud_variables.get(user_id).get(variable_name) is None:
            # There is a user_id but this variable does not exist. Return an error.
            report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The cloud variable '" + variable_name + "' was not found"}
            return jsonify(report=report)
        #Check the variable_name - End

        variable_value_object = user_cloud_variables.get(user_id).get(variable_name)
        if isinstance(variable_value_object, str) or isinstance(variable_value_object, (int, long, float)):
            # variable_value is simply a string or a number. Just return it.
            variable_value = user_cloud_variables[user_id][variable_name]
            report = {'data': variable_value, "data_type" : "primitive", 'wasValueRetrieved': True}
            return jsonify(report=report)
        elif isinstance(variable_value_object, dict):
            if (variable_value_object.get('variable_type') is not None) and (variable_value_object.get('variable_contents') is not None):
                if variable_value_object.get('variable_type') == "dataframe":
                    variable_value = user_cloud_variables[user_id][variable_name]['variable_contents']

                    # Now convert the dataframe to a string, to send it back to the client.
                    temp_var = StringIO.StringIO()
                    variable_value.to_csv(temp_var)
                    csv_output_string = temp_var.getvalue()
                    data_type = "dataframe"

                    report = {'data': csv_output_string, 'data_type' : data_type, 'wasValueRetrieved': True}
                    return jsonify(report=report)

    else:
        report = {'data': None, 'wasValueRetrieved': False, 'errorMessage': "The cloud variable name must be a string or a number"}
        return jsonify(report=report)




@app.route('/api/internaldataprocessing/select')
def dataprocessingSelect():
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
    dataSourceType = str(request.args.get('dataSourceType'))
    dataSourceValue = str(request.args.get('dataSourceValue'))

    # Check the dataSource parameters and Get the data source.
    (errorReport , methodReturnValue) = verifyAndGetDataSource(pandas, user_id, dataSourceType, dataSourceValue)
    if errorReport == "errorOccurred":
        return methodReturnValue
    elif methodReturnValue is None:
        report = {'errorMessage': "The data source type was not a url or a cloud variable."}
        return jsonify(report=report)
    else:
        csv_dataframe = methodReturnValue


    # perform the select method.
    results = computeservice.select_method(csv_dataframe, condition_field, condition_operator, condition_value)
    # Check for an error.
    if results.get('errorMessage') is not None:
        report = {'errorMessage': results.get('errorMessage')}
        return jsonify(report=report)

    variable_type = results.get('variable_type')    #variable_type = "dataframe" or "primitive"
    variable_value = results.get('variable_value')

    # Testing.
    app.logger.debug(variable_value)

    '''
    Store the result of the processing operation in the serverCloudVariables dictionary.
    Then receive a variable_reference_index which is a number which is used to later reference the stored variable.
    '''
    variable_reference_index = storeInServerCloudVariablesDictionary(user_id, variable_type, variable_value)

    # form a report with a reference to the variable on the cloud and then return it.
    data = {'variable_reference_index': variable_reference_index, "errorMessage": None}
    report = {'data': data}
    return jsonify(report=report)

@app.route('/api/internaldataprocessing/methodSet1')
def dataprocessingMethodSet1():
    #For the maximum and minimum methods.

    # pandas is only required for a few of the data processing operations.
    import pandas as pandas

    # Setup the debugger.
    computeservice.setup_debugger(app.logger)

    # Get the request parameters.
    user_id = str(request.args.get('user_id'))
    operationType = str(request.args.get('operationType'))
    field = str(request.args.get('field'))
    dataSourceType = str(request.args.get('dataSourceType'))
    dataSourceValue = str(request.args.get('dataSourceValue'))
    returnType = str(request.args.get('returnType'))

    # Check the dataSource parameters and Get the data source.
    (errorReport , methodReturnValue) = verifyAndGetDataSource(pandas, user_id, dataSourceType, dataSourceValue)
    if errorReport == "errorOccurred":
        return methodReturnValue
    elif methodReturnValue is None:
        report = {'errorMessage': "The data source type was not a url or a cloud variable."}
        return jsonify(report=report)
    else:
        csv_dataframe = methodReturnValue

    # perform the maximum, minimimum, etc.
    results = computeservice.processingMethodsSet1(csv_dataframe, operationType, field, returnType)
    # Check for an error.
    if results.get('errorMessage') is not None:
        # Then there was an error. Return the errorMessage.
        report = {'errorMessage': results.get('errorMessage')}
        return jsonify(report=report)


    variable_type = results.get('variable_type')    #variable_type = "dataframe" or "primitive"
    variable_value = results.get('variable_value')

    # Testing
    app.logger.debug(variable_value)
    app.logger.debug(type(variable_value))

    '''
    Store the result of the processing operation in the serverCloudVariables dictionary.
    Then receive a variable_reference_index which is a number which is used to later reference the stored variable.
    '''
    variable_reference_index = storeInServerCloudVariablesDictionary(user_id, variable_type, variable_value)

    # form a report with a reference to the variable on the cloud and then return it.
    data = {'variable_reference_index': variable_reference_index, "errorMessage": None}
    report = {'data': data}
    return jsonify(report=report)


@app.route('/api/internaldataprocessing/methodSet2')
def dataprocessingMethodSet2():
    # For the average, median, sum, product, etc. methods.

    # pandas is only required for a few of the data processing operations.
    import pandas as pandas
    import numpy as np

    # Setup the debugger.
    computeservice.setup_debugger(app.logger)

    # Get the request parameters.
    user_id = str(request.args.get('user_id'))
    operationType = str(request.args.get('operationType'))
    field = str(request.args.get('field'))
    dataSourceType = str(request.args.get('dataSourceType'))
    dataSourceValue = str(request.args.get('dataSourceValue'))


    # Check the dataSource parameters and Get the data source.
    (errorReport , methodReturnValue) = verifyAndGetDataSource(pandas, user_id, dataSourceType, dataSourceValue)
    if errorReport == "errorOccurred":
        return methodReturnValue
    elif methodReturnValue is None:
        report = {'errorMessage': "The data source type was not a url or a cloud variable."}
        return jsonify(report=report)
    else:
        csv_dataframe = methodReturnValue


    # perform the desired processing method.
    results = computeservice.processingMethodsSet2(csv_dataframe, operationType, field)

    # Check for an error.
    if results.get('errorMessage') is not None:
        # Then there was an error. Return the errorMessage.
        report = {'errorMessage': results.get('errorMessage')}
        return jsonify(report=report)

    variable_type = results.get('variable_type')    #variable_type = "dataframe" or "primitive"
    variable_value = results.get('variable_value')

    # Testing
    app.logger.debug(variable_value)
    app.logger.debug(type(variable_value))

    '''
    Store the result of the processing operation in the serverCloudVariables dictionary.
    Then receive a variable_reference_index which is a number which is used to later reference the stored variable.
    '''
    variable_reference_index = storeInServerCloudVariablesDictionary(user_id, variable_type, variable_value)

    # form a report with a reference to the variable on the cloud and then return it.
    data = {'variable_reference_index': variable_reference_index, "errorMessage": None}
    report = {'data': data}
    return jsonify(report=report)



def verifyAndGetDataSource(pandas, user_id, dataSourceType, dataSourceValue):
    # If dataSourceType is a url.
    if dataSourceType == "url":
        # Read in the csv file.
        try:
            csv_dataframe = pandas.read_csv(dataSourceValue)
        except IOError as e:
            report = {'errorMessage': e.message}
            return ("erorrOccurred", jsonify(report=report))
    elif dataSourceType == "cloud_variable":
        # Perform some checks to make sure we get a valid dataframe from the cloud variable.
        if user_cloud_variables.get(user_id) is None:
            # There isn't a user_id because no variables have been added yet . Return an error.
            report = {'errorMessage': "The cloud variable '" + dataSourceValue + "' was not found"}
            return ("erorrOccurred", jsonify(report=report))
        if user_cloud_variables.get(user_id).get(dataSourceValue) is None:
            # There is a user_id but this variable does not exist. Return an error.
            report = {'errorMessage': "The cloud variable '" + dataSourceValue + "' was not found"}
            return ("erorrOccurred", jsonify(report=report))
        if isinstance(user_cloud_variables.get(user_id).get(dataSourceValue), (str, int, long, float)):
            # The cloud variable is not a dataframe. Return an error.
            report = {'errorMessage': "The cloud variable '" + dataSourceValue + "' is not a dataframe that can be operated on"}
            return ("erorrOccurred", jsonify(report=report))
        if user_cloud_variables.get(user_id).get(dataSourceValue).get('variable_type') != "dataframe":
            # The cloud variable is not a dataframe. Return an error.
            report = {'errorMessage': "The cloud variable '" + dataSourceValue + "' is not a dataframe that can be operated on"}
            return ("erorrOccurred", jsonify(report=report))
        if str(type(user_cloud_variables.get(user_id).get(dataSourceValue).get('variable_contents'))) != "<class 'pandas.core.frame.DataFrame'>":
            # The cloud variable is not a dataframe. Return an error.
            report = {'errorMessage': "The cloud variable '" + dataSourceValue + "' is not a dataframe that can be operated on"}
            return ("erorrOccurred", jsonify(report=report))
        # Checks passed. The cloud variable is a CSV dataframe. Retrieve the cloud variable.
        csv_dataframe = user_cloud_variables.get(user_id).get(dataSourceValue).get('variable_contents')
    else:
        csv_dataframe = None

    return ("noErrorOccurred", csv_dataframe)

def storeInServerCloudVariablesDictionary(user_id, variable_type, variable_value):
    # Store this result on the server somewhere, which can be accessed later.
    # variable_reference_index counts the number of variables this user has created.
    # This number will be used to reference a particular variable that was created earlier.

    if server_cloud_variables.get(user_id) is None:
        # The user has just run their first processing operation.
        server_cloud_variables[user_id] = {}
        server_cloud_variables[user_id]['variable_reference_index'] = 0
    else:
        # The user has already run a processing operation. Increment the index.
        server_cloud_variables[user_id]['variable_reference_index'] = (server_cloud_variables[user_id]['variable_reference_index'] + 1)

    # Get the variable_reference_index
    variable_reference_index = str(server_cloud_variables[user_id]['variable_reference_index'])

    # Store the contents inside server_cloud_variables.
    if variable_type == "dataframe":
        server_cloud_variables[user_id][variable_reference_index] = {}
        server_cloud_variables[user_id][variable_reference_index]['variable_type'] = 'dataframe'
        server_cloud_variables[user_id][variable_reference_index]['variable_contents'] = variable_value
    elif variable_type == "primitive":
        server_cloud_variables[user_id][variable_reference_index] = variable_value

    return variable_reference_index



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


@app.route('/api/returnTestData')
def returnTestData():
    data = 25
    report = {'data': data }
    return jsonify(report=report)




if __name__ == '__main__':
    app.debug = True
    app.run()

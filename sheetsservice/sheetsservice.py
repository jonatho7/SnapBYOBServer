from __future__ import print_function

_USE_CLASSES = False
_START_CONNECTED = True

import sys
try:
    import simplejson as json
except ImportError:
    import json

HEADER = {'User-Agent': 'CORGIS Weather library for educational purposes'}
PYTHON_3 = sys.version_info >= (3, 0)

if PYTHON_3:
    import urllib.request as request
else:
    import urllib2

from flask import jsonify, json

from flask import Flask
app = Flask(__name__)


def get_column_data(columnNumber, rowStart, rowEnd, sheetNumber, sheetsURL):

    newURLString = "http://" + sheetsURL
    rawResponseValue = _get(newURLString)

    # responseValue is in String format.
    responseValue = removeUnwantedCharacters(rawResponseValue)

    # Convert to Python JSON object.
    jsonObject = json.loads(responseValue)

    # Now get the specific data that we want.


    specificValue = jsonObject['feed']['entry'][0]
    app.logger.debug(specificValue)

    return specificValue




# This is a customized version of urlRequestForClient. Do not copy this one back to routes.py
def urlRequestForClient(urlString):

    newURLString = "http://" + urlString

    rawResponseValue = _get(newURLString)

    responseValue = removeUnwantedCharacters(rawResponseValue)

    #Form the response.
    urlReport = {'responseValue': responseValue}

    #Return the results.
    return jsonify(urlReport=urlReport)


# Helper Methods
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



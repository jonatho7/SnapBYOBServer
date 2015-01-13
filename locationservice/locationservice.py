from __future__ import print_function

_USE_CLASSES = False
_START_CONNECTED = True

import sys, zlib, base64
try:
    import simplejson as json
except ImportError:
    import json

HEADER = {'User-Agent': 'CORGIS Weather library for educational purposes'}
PYTHON_3 = sys.version_info >= (3, 0)

if PYTHON_3:
    import urllib.request as request
    from urllib.parse import quote_plus
else:
    import urllib2
    from urllib import quote_plus



def get_lat_and_long(address):
    """
    Gets a report on the current weather, forecast, and more detailed information about the location.

    :param str address: A location (e.g., "Newark, DE") somewhere in the United States
    :returns: report
    """
    response = _geocode(address)
    if response == "":
        raise GeocodeException("Nothing was returned from the server.")
    try:
        geocode_data = _from_json(response)
    except ValueError:
        raise GeocodeException("The response from the Server was invalid. Perhaps the internet is down?")
    status = geocode_data.get('status', 'INVALID_RETURN')
    if status == 'OK':
        try:
            results = geocode_data['results']
            if results:
                location = results[0]['geometry']['location']
                latitude = location['lat']
                longitude = location['lng']
            else:
                raise GeocodeException("The address could not be found; check that it's valid on Google Maps.")
        except KeyError:
            raise GeocodeException("The response from the Geocode server was invalid. Perhaps this wasn't a valid address?")

        print("latitude: ", latitude)
        print("longitude: ", longitude)

        lat_and_long = {'latitude': latitude, 'longitude': longitude }
        return lat_and_long

    else:
        raise GeocodeException(GEOCODE_ERRORS.get(status, "Unknown error occurred: "+status))









def _geocode_request(address):
    """
    Used to build the request string used by :func:`geocode`.
    
    :param str address: A location (e.g., "Newark, DE") somewhere in the United States
    :returns: str
    """
    address = address.lower()
    arguments = dict([("address", address), ("sensor", "true")])
    return _urlencode("http://maps.googleapis.com/maps/api/geocode/json", arguments)
    
def _geocode(address):
    """
    Like :func:`geocode` except returns the raw data instead.
    
    :param str address: A location (e.g., "Newark, DE") somewhere in the United States
    :returns: str
    """
    key = _geocode_request(address)
    result = _get(key)  # if _CONNECTED else _lookup(key)
    # if _CONNECTED and _EDITABLE:
    #    _add_to_cache(key, result)
    return result


def _get(url):
    """
    Internal method to convert a URL into it's response (a *str*).

    :param str url: the url to request a response from
    :returns: the *str* response
    """
    if PYTHON_3:
        req = request.Request(url, headers=HEADER)
        response = request.urlopen(req)
        return response.read().decode('utf-8')
    else:
        req = urllib2.Request(url, headers=HEADER)
        response = urllib2.urlopen(req)
        return response.read()


def _urlencode(query, params):
    """
    Internal method to combine the url and params into a single url string.

    :param str query: the base url to query
    :param dict params: the parameters to send to the url
    :returns: a *str* of the full url
    """
    return query + '?' + '&'.join(key+'='+quote_plus(str(value))
                                  for key, value in _iteritems(params))


def _iteritems(_dict):
    """
    Internal method to factor-out Py2-to-3 differences in dictionary item
        iterator methods

    :param dict _dict: the dictionary to parse
    :returns: the iterable dictionary
    """
    if PYTHON_3:
        return _dict.items()
    else:
        return _dict.iteritems()


def _from_json(data):
    """
    Convert the given string data into a JSON dict/list/primitive, ensuring that
    `str` are used instead of bytes.
    """
    return _recursively_convert_unicode_to_str(json.loads(data))


def _recursively_convert_unicode_to_str(input):
    """
    Force the given input to only use `str` instead of `bytes` or `unicode`.

    This works even if the input is a dict, list,
    """
    if isinstance(input, dict):
        return {_recursively_convert_unicode_to_str(key): _recursively_convert_unicode_to_str(value) for key, value in input.items()}
    elif isinstance(input, list):
        return [_recursively_convert_unicode_to_str(element) for element in input]
    elif PYTHON_3 and isinstance(input, str):
        return str(input.encode('ascii', 'replace').decode('ascii'))
    else:
        return input


class GeocodeException(Exception):
    pass

GEOCODE_ERRORS = {"REQUEST_DENIED": "The given address was denied.",
				  "ZERO_RESULTS": "The given address could not be found.",
				  "OVER_QUERY_LIMIT": "The service has been used too many times today.",
				  "INVALID_REQUEST": "The given address was invalid.",
				  "UNKNOWN_ERROR": "A temporary error occurred; please try again.",
				  "UNAVAILABLE": "The given address is not available offline."}


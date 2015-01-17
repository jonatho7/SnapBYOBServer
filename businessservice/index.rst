.. businesssearch documentation master file, created by
sphinx-quickstart on Tue Jul 30 14:19:10 2013.
You can adapt this file completely to your liking, but it should at least
contain the root `toctree` directive.


Welcome to Business Search's documentation!
===========================================

The Business Search library is useful for searching for businesses of a certain
type with the radius of an area

Note that this data stream is high volume

.. code-block:: python

  >>> import businesssearch

You can get information for any businesses within a certain area, for example
let's get information for any stores that sell food within Blacksburg.

.. TODO

.. code-block:: python

  >>> business_list = businesssearch.get_business_information("food", "blacksburg")
  >>> business_list

A list of business dictionaries will be returned, you can go info for a certain
business by using keys.

print "{} {}".format(1, 2)
.. code-block:: python

  >>> for business in business_list:
  ...     print("Name: {0}, Rating {1}", business['name'], business['rap'])

Here is the complete list of information that can be retrieved from a business dictionary

========================  ============
Keys                      Explanation
========================  ============
name                      The name of the business
id                        The yelp id for this business
location                  The location for this business
display_phone             The phone number for this business
snippet_text              ?
rating                    The user rating for this business
========================  ============

The built-in cache allows you to work online:

.. code-block:: python

  >>> businesssearch.connect() # unnecessary: default is connected

or offline:

.. TODO

.. code-block:: python

  >>> businesssearch.disconnect()
  >>> businesssearch.get_business_information("food", "blacksburg")

But remember there must be data in the cache already!

.. code-block:: python

  >>> businesssearch.get_business_information("food", "blacksburg")
  businesssearch.BusinessSearchException: There were no results

Populating the cache
^^^^^^^^^^^^^^^^^^^^

Say you want to add blacksburg's food stores to the cache

.. code-block:: python

  >>> businesssearch._start_editing()
  >>> businesssearch.get_business_information("food", "blacksburg")
  >>> businesssearch._save_cache()

Now the file "cache.json" file will have an entry for ("http://api.yelp.com/v2/search?term=food&location=blacksburg"), and
you can use that as an input to the function when disconnected.

You can also create a different cache file by passing a filename to the
_save_cache() method, and use that cache by passing its name to the
disconnect() method.

For example, this will populate a file called "food.json", which will contain
food restaurant information for blacksburg

.. code-block:: python

  >>> businesssearch._start_editing()
  >>> businesssearch.get_business_information("food", "blacksburg")
  >>> businesssearch._save_cache('food.json')

To use that cached file, specify the json file name when you call disconnect():

.. code-block:: python

  >>> stockservice.disconnect("food.json")

Finally, you can put multiple entries into the cache for a given input, simulating multiple calls. These items will be appended. If the cache runs out, it will start returning empty reports.

.. code-block:: python

  >>> businesssearch.connect()
  >>> businesssearch._start_editing()
  >>> businesssearch.get_business_information("food", "blacksburg")
  >>> businesssearch.get_business_information("food", "christiansburg")
  >>> businesssearch._save_cache()
  >>> businesssearch.disconnect()
  >>> businesssearch.get_business_information("food", "blacksburg")
  >>> businesssearch.get_business_information("food", "christiansburg")

Exceptions
----------

.. autoexception:: businesssearch.BusinessSearchException

.. Classes
.. -------

.. .. autoclass:: businesssearch.Business

Methods
-------

.. autofunction:: stockservice.connect()

.. autofunction:: stockservice.disconnect()

.. autofunction:: stockservice.get_business_information(term, location)

from flask import Flask, abort, redirect, url_for, json
from flask import render_template, make_response
from flask import jsonify
from flask import request
from weatherservice import weatherservice
from reddit import reddit as red
from stockservice import stockservice

#Uncomment these next lines for logging on the think.cs.vt.edu server.
#import logging
#logging.basicConfig(
#    level=logging.WARNING,
#    format='[%(asctime)s] [%(name)s] [%(levelname)s] %(message)s',
#    datefmt='%Y%m%d-%H:%M%p',
#)

from functools import wraps, update_wrapper
from datetime import datetime

weatherservice.connect()
app = Flask(__name__)
weatherReport = "";

#For caching.
@app.after_request
def add_header(response):
    response.headers['Last-Modified'] = datetime.now()
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


#(Start) Helper methods.

#If the current time that the user gets the weather report
#is at night, then forecasts will not have a "This Afternoon"
#and a "Tonight" forecast, but will only have a "Tonight"
#forecast. To fix this, the "Tonight" forecast will be copied
#and inserted at the beginning of the list.
def adjustForecastsForTime(forecasts):
    if (forecasts[0].get('period_name') == "Tonight"):
        forecasts.insert(0, forecasts[0])
        
#(End) helper methods.

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')

@app.route('/snap')
def snap():
    return render_template('snap.html')


#This does not work.
@app.route('/snapredirect')
def snapredirect():
    return redirect("http://127.0.0.1:5000/templates/welcome.html", code=302)

#This does not work either.
@app.route('/renderTemplateInStaticFolder')
def renderTemplateInStaticFolder():
    return render_template('static/welcoming.html')


@app.route('/google')
def google():
    return redirect("http://www.google.com", code=302)


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
    




if __name__ == '__main__':
    app.debug = True
    app.run()

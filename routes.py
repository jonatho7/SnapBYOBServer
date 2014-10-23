from flask import Flask, abort, redirect, url_for, json
from flask import render_template
from flask import jsonify
from flask import request
from weatherservice import weatherservice
from reddit import reddit as red

weatherservice.connect()
app = Flask(__name__)
weatherReport = "";

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
    
    
    
#jsonify example

# This is a dummy list, 2 nested arrays containing some
# params and values
#list = [
#    {'param': 'foo', 'val': 2},
#    {'param': 'bar', 'val': 10}
#
# jsonify will do for us all the work, returning the
# previous data structure in JSON
#return jsonify(results=list)


@app.route('/weather')
def weather():
    locationString = request.args.get('location')
    weatherReport = weatherservice.get_report(locationString)
    #Logging posts will show up in terminal that Python Flask is running in.
    app.logger.debug(locationString)
    return jsonify(weatherReport=weatherReport)
    
@app.route('/reddit')
def reddit():
    subreddit = request.args.get('subreddit')
    posts = red.get_posts(subreddit,'hot',False)
    return jsonify(redditReport=posts)
    

if __name__ == '__main__':
    app.debug = True
    app.run()

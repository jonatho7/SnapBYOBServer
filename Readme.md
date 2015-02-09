

# Custom Implementation of Snap!

This is the main repository for the custom implementation of the open-source Snap! platform. This version of Snap! will add real-time and big-data libraries into the Snap! platform.

## Hosted Site: http://think.cs.vt.edu/snap/

### Examples: 
  - Stocks Example http://think.cs.vt.edu/snap/snap#open:http://think.cs.vt.edu/snap/static/Snap-Sample-Projects/Stocks.xml

  - Streaming Stocks Example: http://think.cs.vt.edu/snap/snap#open:http://think.cs.vt.edu/snap/static/Snap-Sample-Projects/streaming_stocks.xml

  - Earthquakes Example: http://think.cs.vt.edu/snap/snap#open:http://think.cs.vt.edu/snap/static/Snap-Sample-Projects/EarthquakesInUSA.xml


### Installation and Setup Instructions:
  - Install Python Flask. Flask can be found at: http://flask.pocoo.org/. Make sure to install Pyton Flask's dependencies: the Jinja2 template engine and the Werkzeug WSGI toolkit. 
  - Clone this repository.
  - Navigate to the static folder and clone the following repository: https://github.com/jonatho7/Snap--Build-Your-Own-Blocks. This repository is not setup as a submodule. I chose to keep these two repositories separate for the sake of simplicity. However, remember to commit your changes to both repositories if you make changes in both repositories.
  - The repository mentioned above is named "Snap" on my machine. It is important that this repository be named "Snap" and not "Snap--Build-Your-Own-Blocks". Change the name of this folder if necessary.

### Run Snap:
  - Open up a command prompt in the SnapBYOBServer repository folder.
  - Run: routes.py
   If the installation went as planned you should see a message on the next two lines of the command prompt:
      * Running on http://127.0.0.1:5000/
      * Restarting with reloader
  - Open up a web browser.
  - Navigate to http://127.0.0.1:5000/snap and Snap will load. That it. Enjoy!




README

Server for an implementation of the open-source Snap! platform. This version of Snap! will have real-time and big-data
libraries integrated into the Snap! platform.



The modified Snap! project repository should be located in "static/Snap".
Since this is a separate git repository which is also managed separately,
it is not shown in this repository, and needs to be retrieved separately.


Development Notes (local development):
How to start up Snap!

1. In cmd prompt, enter:
		routes.py	//This will start up the Python Flask web server.
2. In web browser, go to:
		http://127.0.0.1:5000/snap
		OR
		http://127.0.0.1:5000
3. Clear your cache if you change the js files, in order to load the new file.
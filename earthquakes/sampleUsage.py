print("Attempting to retrieve USGS earthquake information.")
import earthquakes as earthquakes

#By default it only gets the significant earthquakes from the past hour.
# can use: hour, day (today), week (7 days), month (30 days)
# significant, or all
#report = earthquakes.get_report()

report = earthquakes.get_report('day', 'all')


#print(report)

print(len(report['earthquakes']))

print(report['earthquakes'][0]['location_description'])

print(report['earthquakes'][0]['magnitude'])

print(report['earthquakes'][0]['url'])

print(report['earthquakes'][0]['location']['latitude'])
print(report['earthquakes'][0]['location']['longitude'])

#Earthquake JSON
print(report['earthquakes'][0])

input_var = input("Press enter to continue: ")

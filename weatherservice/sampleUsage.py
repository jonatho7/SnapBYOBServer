print("Attempting to retrieve the temperature.")
import sampleWeatherService as weatherservice
weatherservice.connect()
report = weatherservice.get_report("Blacksburg, VA")
temp = report.get('weather').get('temperature')
print(temp)

input_var = input("Press enter to continue: ")

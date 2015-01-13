print("Attempting to retrieve the latitude and longitude of the address.")
import locationservice as locationservice
report = locationservice.get_lat_and_long("Blacksburg, VA")
print(report)

input_var = input("Press enter to continue: ")

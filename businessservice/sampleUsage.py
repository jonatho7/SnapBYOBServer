print("Attempting to retrieve the business information.")
import BusinessSearch as businesssearch


businesssearch.connect()
report = businesssearch.get_business_information("food","VA")
print(report)

input_var = input("Press enter to continue: ")

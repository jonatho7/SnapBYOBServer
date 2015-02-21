
import computeservice
# Testing.

# Run the select method.
csv_input_string = 'fludata_small.csv'
csv_output_string = 'csv_output.txt'
condition_field = 'REGION'
condition_operator = '!='
condition_value = 'Region 2'
print(computeservice.select_method(csv_input_string, csv_output_string, condition_field, condition_operator, condition_value))

print("")
print("")
print("")

# Run the maximum method.
csv_output_string2 = 'csv_output2.txt'
field_name = 'ILITOTAL'
return_type_string = 'entire row'  # possible values: 'entire row' OR 'value only'
print(computeservice.get_maximum(csv_output_string, csv_output_string2, field_name, return_type_string))


# Run the average method.
print(computeservice.get_average(csv_output_string, field_name))


computeservice.iterate(csv_input_string)
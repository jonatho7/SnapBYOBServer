
import pandas as pandas
import numpy as np


def select_method(csv_dataframe, condition_field, condition_operator, condition_value):


    # convert condition_value to the same type as the condition_field so comparisons can be made.
    try:
        if isinstance(csv_dataframe[condition_field][0], np.float):
            condition_value = float(condition_value)
        elif isinstance(csv_dataframe[condition_field][0], np.integer):
            condition_value = int(condition_value)
    # This error will occur when the user enters an invalid string for the condition name.
    except KeyError:
        temp_string = "Invalid condition field name: " + str(condition_field)
        return temp_string

    # Select only the relevant rows from the csv data.
    if condition_operator == '==':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] == condition_value]
    elif condition_operator == '!=':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] != condition_value]
    elif condition_operator == '>':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] > condition_value]
    elif condition_operator == '>=':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] >= condition_value]
    elif condition_operator == '<':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] < condition_value]
    elif condition_operator == '<=':
        new_csv_dataframe = csv_dataframe[csv_dataframe[condition_field] <= condition_value]
    else:
        new_csv_dataframe = csv_dataframe

    # Print this data to a new csv file.
    # new_csv_dataframe.to_csv(csv_output_string, index=False)

    return new_csv_dataframe


def get_maximum(csv_input_string, field_name, return_type_string):
    # Read in the csv file.
    csv_data = pandas.read_csv(csv_input_string)

    # Get the index where the maximum is.
    index_of_max = csv_data[field_name].argmax()

    # For Minimum:
    # index_of_max = csv_data[field_name].argmin()

    # Create a new csv variable
    new_csv_data = csv_data[index_of_max:index_of_max+1]

    # Print this data to a new csv file.
    # new_csv_data.to_csv(csv_output_string, index=False)

    return new_csv_data


def get_average(csv_input_string, field_name):
    # Read in the csv file.
    csv_data = pandas.read_csv(csv_input_string)

    # Get the average value.
    average = csv_data[field_name].mean()

    return average


def iterate(csv_input_string):
    csv_data = pandas.read_csv(csv_input_string)

    temp = csv_data['ILITOTAL']
    print(temp)
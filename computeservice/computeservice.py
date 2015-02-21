


logger = None
def setup_debugger(logger_reference):
    global logger
    logger = logger_reference


def select_method(csv_dataframe, condition_field, condition_operator, condition_value):
    logger.debug(csv_dataframe)

    import pandas as pandas
    import numpy as np


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

    #Re-index the dataframe
    new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)

    # debugging.
    logger.debug(new_csv_dataframe)

    return new_csv_dataframe


def get_maximum(csv_dataframe, field_name, return_type_string):

    import pandas as pandas
    import numpy as np
    
    if not csv_dataframe.empty:
        #The dataframe is not empty.

        # Get the index where the maximum is, and also get the maximum.
        index_of_max = csv_dataframe[field_name].argmax()
        max_value = csv_dataframe[field_name].max()

        # Create a new csv dataframe with only this result.
        new_csv_dataframe = csv_dataframe[index_of_max:index_of_max+1]

        #Re-index the dataframe
        new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)

        if return_type_string == "entire row":
            return new_csv_dataframe
        elif return_type_string == "value only":
            return max_value
        else:
            return "Unexpected error."
    else:
        # The dataframe is empty.
        if return_type_string == "entire row":
            return csv_dataframe
        else:
            return "A maximum value cannot be acquired. There are no rows of data."


def get_average(csv_dataframe, field_name):

    # Get the average value.
    average = csv_dataframe[field_name].mean()

    return average


def iterate(csv_input_string):
    csv_data = pandas.read_csv(csv_input_string)

    temp = csv_data['ILITOTAL']
    print(temp)

logger = None
def setup_debugger(logger_reference):
    global logger
    logger = logger_reference


def select_method(csv_dataframe, condition_field, condition_operator, condition_value):
    import numpy as np

    # convert condition_value to the same type as the condition_field so comparisons can be made.
    try:
        if isinstance(csv_dataframe[condition_field][0], np.float):
            try:
                condition_value = float(condition_value)
            except ValueError:
                errorMessage = "Condition field '" + condition_field + "' and condition value '" + str(condition_value) +  "' are not of the same type. "
                return {"errorMessage": errorMessage}
        elif isinstance(csv_dataframe[condition_field][0], np.integer):
            try:
                condition_value = int(condition_value)
            except ValueError:
                errorMessage = "Condition field '" + condition_field + "' and condition value '" + str(condition_value) +  "' are not of the same type. "
                return {"errorMessage": errorMessage}
    # This error will occur when the user enters an invalid string for the condition name.
    except KeyError:
        errorMessage = "The data source does not have a field named: " + str(condition_field)
        return {"errorMessage": errorMessage}

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

    # Re-index the dataframe
    new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)

    # debugging.
    # logger.debug(new_csv_dataframe)

    return {"dataframe": new_csv_dataframe, "errorMessage": None}


def get_maximum(csv_dataframe, field, returnType):
    # Check to see if the dataframe is empty.
    if csv_dataframe.empty:
        errorMessage = "A maximum value cannot be acquired. There are no rows of data left."
        return {"errorMessage": errorMessage}

    # Check to see if the dataframe has the specified field.
    try:
        test = csv_dataframe[field]
    except KeyError:
        errorMessage = "The data source does not have a field named: " + str(field)
        return {"errorMessage": errorMessage}

    # Check the return type parameter.
    if returnType != "entire row" and returnType != "value only":
        errorMessage = 'The return type must equal "entire row" or "value only".'
        return {"errorMessage": errorMessage}

    # Get the maximum.
    if returnType == "entire row":
        index_of_max = csv_dataframe[field].argmax()

        # Create a new csv dataframe with only this result.
        new_csv_dataframe = csv_dataframe[index_of_max:index_of_max+1]

        # Re-index the dataframe
        new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)

        return {"dataframe": new_csv_dataframe, "errorMessage": None}
    elif returnType == "value only":
        max_value = csv_dataframe[field].max()
        return {"primitive_value": max_value, "errorMessage": None}


def get_minimum(csv_dataframe, field, returnType):
    # Check to see if the dataframe is empty.
    if csv_dataframe.empty:
        errorMessage = "A minimum value cannot be acquired. There are no rows of data left."
        return {"errorMessage": errorMessage}

    # Check to see if the dataframe has the specified field.
    try:
        test = csv_dataframe[field]
    except KeyError:
        errorMessage = "The data source does not have a field named: " + str(field)
        return {"errorMessage": errorMessage}

    # Check the return type parameter.
    if returnType != "entire row" and returnType != "value only":
        errorMessage = 'The return type must equal "entire row" or "value only".'
        return {"errorMessage": errorMessage}

    # Get the minimum.
    if returnType == "entire row":
        index_of_min = csv_dataframe[field].argmin()

        # Create a new csv dataframe with only this result.
        new_csv_dataframe = csv_dataframe[index_of_min:index_of_min+1]

        # Re-index the dataframe
        new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)

        return {"dataframe": new_csv_dataframe, "errorMessage": None}
    elif returnType == "value only":
        min_value = csv_dataframe[field].min()
        return {"primitive_value": min_value, "errorMessage": None}

def processingMethodsSet2(csv_dataframe, operationType, field):
    # Check to see if the dataframe is empty.
    if csv_dataframe.empty:
        errorMessage = "A value cannot be acquired from the " + str(operationType) + " method. There are no rows of data left."
        return {"errorMessage": errorMessage}

    # Check to see if the dataframe has the specified field.
    try:
        test = csv_dataframe[field]
    except KeyError:
        errorMessage = "The data source does not have a field named: " + str(field)
        return {"errorMessage": errorMessage}

    # Get the average, sum, product, etc.
    if operationType == "average":
       primitive_value = csv_dataframe[field].mean()
    elif operationType == "sum":
        primitive_value = csv_dataframe[field].sum()
    elif operationType == "product":
        primitive_value = csv_dataframe[field].sum()
    elif operationType == "median":
        primitive_value = csv_dataframe[field].median()
    # elif operationType == "mode":
    #    primitive_value = csv_dataframe[field].mode()
    else:
        errorMessage = "The operation type: " + str(operationType) + " is not valid."
        return {"errorMessage": errorMessage}

    return {"primitive_value": primitive_value, "errorMessage": None}


def iterate(csv_input_string):
    import pandas as pandas
    import numpy as np
    csv_data = pandas.read_csv(csv_input_string)

    temp = csv_data['ILITOTAL']
    print(temp)
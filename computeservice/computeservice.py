
logger = None
def setup_debugger(logger_reference):
    global logger
    logger = logger_reference


def select_method(csv_dataframe, condition_field, condition_operator, condition_value):
    import numpy as np

    logger.debug(condition_field)
    logger.debug(condition_operator)
    logger.debug(condition_value)

    # Check to see if the dataframe is empty.
    try:
        if csv_dataframe.empty:
            return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}
    except AttributeError:
        return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}

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

    return {"variable_type": "dataframe", "variable_value": new_csv_dataframe, "errorMessage": None}


def processingMethodsSet1(csv_dataframe, operationType, field, returnType):
    """
    Contains the maximum and minimum methods.
    """

    # Check to see if the dataframe is empty.
    try:
        if csv_dataframe.empty:
            return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}
    except AttributeError:
        return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}

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

    # Get the maximum, minimum, etc.
    if returnType == "entire row":
        if operationType == "maximum":
            result_index = csv_dataframe[field].argmax()
        elif operationType == "minimum":
            result_index = csv_dataframe[field].argmin()
        else:
            errorMessage = "The operation type: " + str(operationType) + " is not valid."
            return {"errorMessage": errorMessage}

        # Create a new csv dataframe with only this result.
        new_csv_dataframe = csv_dataframe[result_index:result_index+1]
        # Re-index the dataframe
        new_csv_dataframe = new_csv_dataframe.reset_index(drop=True)
        return {"variable_type": "dataframe", "variable_value": new_csv_dataframe, "errorMessage": None}
    elif returnType == "value only":
        if operationType == "maximum":
            primitive_value = csv_dataframe[field].max()
        elif operationType == "minimum":
            primitive_value = csv_dataframe[field].min()
        else:
            errorMessage = "The operation type: " + str(operationType) + " is not valid."
            return {"errorMessage": errorMessage}

        return {"variable_type":"primitive", "variable_value": primitive_value, "errorMessage": None}


def processingMethodsSet2(csv_dataframe, operationType, field):
    """
    Contains the average, sum, product, median methods.
    """

    import numpy as np

    # Check to see if the dataframe is empty.
    try:
        if csv_dataframe.empty:
            return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}
    except AttributeError:
        return {"variable_type" : "primitive", "variable_value": "None", "errorMessage": None}

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
        primitive_value = np.asscalar(primitive_value)
    elif operationType == "product":
        primitive_value = csv_dataframe[field].product()
    elif operationType == "median":
        primitive_value = csv_dataframe[field].median()
    # elif operationType == "mode":
    #    primitive_value = csv_dataframe[field].mode()
    else:
        errorMessage = "The operation type: " + str(operationType) + " is not valid."
        return {"errorMessage": errorMessage}

    return {"variable_type" : "primitive", "variable_value": primitive_value, "errorMessage": None}


def iterate(csv_input_string):
    import pandas as pandas
    import numpy as np
    csv_data = pandas.read_csv(csv_input_string)

    temp = csv_data['ILITOTAL']
    print(temp)
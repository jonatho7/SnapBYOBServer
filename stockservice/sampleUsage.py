print("Attempting to retrieve stock market info.")
import sampleStockService as stockservice

stock_dict = stockservice.get_stock_information("AAPL")
ticker_name = stock_dict['ticker_name']
print(stock_dict)
print(ticker_name)

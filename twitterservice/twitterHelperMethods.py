
def get_num_favorites(tweetsList):
    num_favorites = 0
    for tweet in tweetsList:
        num_favorites += tweet.favorited
        print("tweet.favorited", tweet.favorited)
    return num_favorites


#Gets the maximum retweet value out of all of the tweets in tweetsList.
def get_num_retweets(tweetsList):
    num_retweets = 0
    for tweet in tweetsList:
        if tweet.retweets > num_retweets:
            num_retweets = tweet.retweets
        print("tweet.retweets", tweet.retweets)
        print("tweet.retweets", tweet.text)
    return num_retweets

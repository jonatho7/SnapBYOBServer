#sampleUsage of reddit CORGIS library.
import sampleRedditService as reddit
from msvcrt import getch


def printPostInformation(post):
	print("title: ", post.title )
	print("content: ", post.content )
	print("id: ", post.id )
	print("author: ", post.author )
	print("subreddit: ", post.subreddit )
	print("created: ", post.created )
	print("ups: ", post.ups )
	print("downs: ", post.downs )
	print("is_nsfw: ", post.is_nsfw )
	print("is_url: ", post.is_url )
	
def printCommentsInformation(comment):
	print("body: ", comment.body )
	print("id: ", comment.id )
	print("author: ", comment.author )
	print("subreddit: ", comment.subreddit )
	print("created: ", comment.created )
	print("ups: ", comment.ups )
	print("downs: ", comment.downs )
	
def printOutAllComments(posts, postIndex):
	comments = reddit.get_comments(posts[postIndex])
	recursivelyPrintComments(comments)
	
	
	#Testing Situation.
	"""
	printCommentsInformation(comments[0])
	replies = comments[0].replies
	printCommentsInformation(replies[0])
	#One level deeper.
	replies2 = replies[0].replies
	printCommentsInformation(replies2[0])
	#One more level deeper.
	replies3 = replies2[0].replies
	print("replies3", replies3)
	printCommentsInformation(replies3[0])
	"""
	
	

			
def recursivelyPrintComments(comments):
	#if comments is an empty list
	if not comments:
		#Base Case.
		return
	else:
		#Step Case.
		for comment in comments:
			#Print the information for the comment.
			printCommentsInformation(comment)
			#Break down into further comments.
			recursivelyPrintComments(comment.replies)


print("Started sampleUsage file")
postIndex = 0;




#printPostInformation(posts[postIndex])
#printOutAllComments(posts, postIndex)
#comments = reddit.get_comments(posts['posts'][0])



posts = reddit.get_posts_as_json("virginiatech")
print("posts")
print(posts)

jsonPost0 = posts['posts'][0]
print("jsonPost0")
print(jsonPost0)

objPost0 = reddit.json_to_post(jsonPost0)
print("objPost0")
print(objPost0)
print(objPost0.title)

sort_mode='hot'
max_depth=5
max_breadth=5
commentsList = reddit.get_comments(objPost0,sort_mode, max_depth, max_breadth)
print("commentsList")
print(commentsList)

commentsJson = reddit.comments_to_json(commentsList)
print("commentsJson")
print(commentsJson)


#Get comments by postID.
commentsListing = reddit.get_comments(objPost0.id, sort_mode, max_depth, max_breadth)
print("commentsListing")
print(commentsListing)
commentsJson = reddit.comments_to_json(commentsListing)
print("commentsJson")
print(commentsJson)



#print("posts[0]", posts[0])	
#comments = reddit.get_comments(posts[0])
#print("comments", comments)






#The problem now is that get_comments() expects a post object. But now we have a post json.
#Should we convert the post back from json to an object?
#Or should we just save both of them.

#1. Create a dict_to_post method. Then use this.







print()
print("Program is finished.")

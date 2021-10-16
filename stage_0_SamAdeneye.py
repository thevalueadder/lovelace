name = "Samuel Adeneye" 
email = "samueladeneye75@gmail.com" 
slack_username = "SamAdeneye"
biostack = "Data Science and Machine Learning" 
twitter_handle = "@Unkool_Sam"

def hammD(su,th):
	hd = 0
	for i in range(len(su)):
		if su[i] != th[i]:
			hd += 1
	return hd

hamming_distance = hammD(slack_username, twitter_handle)

print name +', '+email+', '+slack_username+', '+biostack+', '+twitter_handle+',',hamming_distance

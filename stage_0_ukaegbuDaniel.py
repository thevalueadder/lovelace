name = "Ukaegbu Daniel Chinwendu"
email = "ukaegbudaniel33@gmal.com"
slack_username = "@Daniel"
biostack = "Genomics"
twitter_handle = "@brah_coco"

def hammD(su,th):
	hd = 0
	for i in range(len(su)):
		if su[i] != th[i]:
			hd += 1
	return hd

hamming_distance = hammD(slack_username, twitter_handle)

print name +', '+email+', '+slack_username+', '+biostack+', '+twitter_handle+',',hamming_distance

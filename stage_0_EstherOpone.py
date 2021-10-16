name = "Esther Opone"
email = "oponeesther12@gmail.com"
slack_username = "@thevalueadder"
biostack = "Genomics"
twitter_handle = "@thevalueadder_"

def hammD(su,th):
	hd = 0
	for i in range(len(su)):
		if su[i] != th[i]:
			hd += 1
	return hd

hamming_distance = hammD(slack_username, twitter_handle)

print name +', '+email+', '+slack_username+', '+biostack+', '+twitter_handle+',',hamming_distance
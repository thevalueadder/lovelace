var name = "Salma El-Shafie";
var email = "salma4@aucegypt.edu";
var slack_username = "@"+"SalmaElShafie";
var biostack = "Transcriptomics";
var twitter_username = "@SalmaElShafie8";

function hammingDist(str1, str2)
{
    let i = 0, count = 0;
    while (i < str1.length)
    {
        if (str1[i] != str2[i])
            count++;
        i++;
    }
    return count;
}

console.log(name+", "+ email+", "+ slack_username+", "+ biostack+", "+ twitter_username+", "+ hammingDist(slack_username,twitter_username));

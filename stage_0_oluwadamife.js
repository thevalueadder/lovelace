var name = "Oluwadamilola Olamide Olaseni";
var email = "olasenidamilola@gmail.com";
var slack_username = "@"+"oluwadamife";
var biostack = "Genomics";
var twitter_username = "@virtuous_dammy";

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

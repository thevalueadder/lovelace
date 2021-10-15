var name = "Toheeb Olabayonle Amoo";
var email = "amootoheeb50@gmail.com";
var slack_username = "@"+"ToheebAmoo";
var biostack = "Genomics";
var twitter_username = "@amoo_bayo";

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

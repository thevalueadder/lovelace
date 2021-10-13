var name = "Juan Manuel García Sierra";
var email = "juanmgar@gmail.com";
var slack_username = "@"+"JuanmaGarcia";
var biostack = "Genomics";
var twitter_username = "@juanmgar";

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

console.log(name+", "+ email+", "+ slack_username+", "+ biostack+", "+ twitter_username+", "+ hammingDist(slack_username,twitter_usernme));

jQuery(document).ready(function($) {
    // -> Check for tweets in local storage before requesting from the API
    if (sessionStorage.getItem(localStorageKey) != null) {
        var data = JSON.parse(sessionStorage[localStorageKey]);
        displayTweets(data);
    } else {
        // If value doesn't exist in local storage make API call.
        var data = {
            screen_name: twitterScreenName,
            count: tweetsToGet,
            token: secureKey
        };
        $.getJSON(url, data, displayTweets);
    }
});

function displayTweets(data) {
    // Set the data array to local storage if doesn't exist.
    if (sessionStorage.getItem(localStorageKey) === null) {
        sessionStorage[localStorageKey] = JSON.stringify(data);
    }

    if(theme == 'default') {
        tweetHTML = defaultTheme(data);
    }


    $(containerElement).html(tweetHTML);
}

function defaultTheme(d)
{
    var data = d;
    var tweetHTML = "";

    $.each(data, function(i, tweet) {
        tweetHTML += '<div class="satf-tweet__wrapper">';
        tweetHTML += '<h5 class="satf-tweet__heading"><a href="https://twitter.com/' + twitterScreenName + '" target="_blank">@' + twitterScreenName + "</a></h5>";
        tweetHTML += '<p class="satf-tweet__content">' + tweet.text + "</p>";
        tweetHTML += "</div>"
    });

    return tweetHTML;
}
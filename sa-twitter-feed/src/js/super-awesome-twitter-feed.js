jQuery(document).ready(function($) {

    // -> Check for tweets in local storage before requesting from the API
        if (localStorage.getItem(localStorageKey) != null) {
            var data = JSON.parse(localStorage[localStorageKey]);
            displayTweets(data);
        } else {

            // If value doesn't exist in local storage make API call.
            var data = {
                screen_name: twitterScreenName,
                count: tweetsToGet,
                token: secureKey
            }

            $.getJSON(url, data, displayTweets);
        }

        function displayTweets(data) {
            // Set the data array to local storage if doesn't exist.
            if (localStorage.getItem(localStorageKey) === null) {
                localStorage[localStorageKey] = JSON.stringify(data);
            }

            var tweetHTML = "";

            $.each(data, function (i, tweet) {
                tweetHTML += '<div class="tweet-wrapper">';
                tweetHTML += '<h5 class="tweet-heading"><a href="https://twitter.com/' + twitterScreenName + '" target="_blank">@' + twitterScreenName + '</a></h5>';
                tweetHTML += '<p class="tweet-content">' + tweet.text + '</p>';
                tweetHTML += '</div>';
            });

            containerElement.html(tweetHTML);
        }
});
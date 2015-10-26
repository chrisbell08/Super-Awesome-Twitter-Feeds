<?php
require_once('config.php');
if($errors == true)
{
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
if (isset($_GET['token'])) {

    if ($secureKey === $_GET['token']) {


        // Twitter OAuth Script: https://gist.github.com/planetoftheweb/5914179

        require 'tmhOAuth.php'; // Get it from: https://github.com/themattharris/tmhOAuth

        // Use the data from http://dev.twitter.com/apps to fill out this info
        // notice the slight name difference in the last two items)

        $connection = new tmhOAuth(array(
            'consumer_key' => $consumerKey,
            'consumer_secret' => $consumerSecret,
            'user_token' => $accessToken, //access token
            'user_secret' => $accessTokenSecret //access token secret
        ));

        // set up parameters to pass
        $parameters = array();

        if ($_GET['count']) {
            $parameters['count'] = strip_tags($_GET['count']);
        }

        if ($_GET['screen_name']) {
            $parameters['screen_name'] = strip_tags($_GET['screen_name']);
        }

        if ($_GET['twitter_path']) { $twitter_path = $_GET['twitter_path']; }  else {
            $twitter_path = '1.1/statuses/user_timeline.json';
        }


        $http_code = $connection->request('GET', $connection->url($twitter_path), $parameters );

        if ($http_code === 200) { // if everything's good
            $response = strip_tags($connection->response['response']);

            if ($_GET['callback']) { // if we ask for a jsonp callback function
                echo $_GET['callback'],'(', $response,');';
            } else {
                echo $response;
            }
        } else {
            echo "Error ID: ",$http_code, "<br>\n";
            echo "Error: ",$connection->response['error'], "<br>\n";
        }



    }
    else
    {
        echo "Incorrect Token";
    }

}
else
{

    echo "Token does not exist";

};

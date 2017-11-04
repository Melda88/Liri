var Twitter = require('twitter');

var keys = require('./keys.js');

var command = process.argv[2];

console.log('this is loaded');



function twitterSearch(){

    var params = {screen_name: 'MeldaMan88'};
    keys.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
        for (i = 0; i < tweets.length; i++ )

       console.log(tweets[i].text);
     }
     if(error){
         console.log(error);
     }
    });
    
}

if (command === "my-twitter"){
    twitterSearch();
};
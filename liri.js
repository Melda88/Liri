
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');


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

//spotify starts here ****

// Spotify API retrieval

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: 'potatobandito',
 secret: 'd3fbf8c5a721475c99958df47cc2535d'
});



function spotifySearch() {

spotify.search({ type: 'track', query: queryString, limit: 2 }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log('Artist: ' + data.tracks.items[0].album.artists[0].name); //Returning Artist

console.log('Song Title: ' + queryString); //Returning Song Title

console.log('Preview: ' + data.tracks.items[0].album.external_urls.spotify); //Link to Song on Spotify

console.log('Album: ' + data.tracks.items[0].album.name); //Album Name

});

}

if(command === 'spotify-this-song'){
    spotifySearch();
}
var Twitter = require('twitter');


var twitterKeys = new Twitter({
  consumer_key: '3zEhwqbrSizHjMvzMYWcq2yVx',
  consumer_secret: 'yTSBmIQPBONvEpeu8F8nXjy4HHxe1woQuym91dTJHSDPXIqOGi',
  access_token_key: '925507769293262851-48e2WfVzHATLlGjlIDJiI6S8v6Jha1H',
  access_token: '925507769293262851-48e2WfVzHATLlGjlIDJiI6S8v6Jha1H',
  access_token_secret: 'bAhkzSwYDKWcQkwxY3p51J4EZe1lGCfXrEdSkQTguJQ4Y',
});

module.exports = twitterKeys;

var Spotify = require ('spotify');

var spotifyKeys = new Spotify({
  consumer_key: 'c1a2409d98074aa5ae6372b1f4f1692c',
  consumer_secret: 'd3fbf8c5a721475c99958df47cc2535d',
});

module.exports = spotifyKeys;
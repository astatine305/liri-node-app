require("dotenv").config();
var request = require("request");
var keys = require("./keys");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var SpotifyWebApi = require("spotify-web-api-node");
var omdb = require("omdb");

// var client = new Twitter({
//     consumer_key: process.env.TWITTER_CONSUMER_KEY,
//     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

// });


var client = new Twitter(keys.twitter);
var spotifyApi = new SpotifyWebApi(keys.spotify);


var SEARCH = function(){

this.findTweet = function() {
var params = {screen_name: '@bnguyen16795044', count: 10 };
client.get("statuses/user_timeline", params, function(error, tweets, response){
    if (!error) {
        for (i = 0;i < tweets.length; i++) {
            console.log("Date: "+ tweets[i].created_at + "\n" + "Name: "+ tweets[i].user.name + "\n" + "Tweet: " + tweets[i].text + "\n==================");
        }
    }
});
};

this.findSong = function(term) {
    if (term === null) {
        term = "Hotel California";
    }
    request('https://api.spotify.com/v1/search?q=' + term + '&type=track', function(error, response, body){
        if (!error) {
        jsonData = JSON.parse(body);
        console.log(jsonData);
        }
    })
}

// this.findSong = function(){
//     spotify.search({type: "artist OR album OR track", query: "All the Small Things", limit: 1}, function(err, data) {
//         if (err) {
//             console.log("Error occured: "+ err);
//             return;
//         }

//         console.log(data);
//     });

// };

this.findMovies = function() {
    omdb.get({title: "Saw", year: 2004}, true, function(err, movie){
        if (err) {
            return console.error(err);
        }
        if(!movie) {
            return console.log("Movie not found!");
        }
        console.log(movie);
    })
    
}


};

module.exports = SEARCH;
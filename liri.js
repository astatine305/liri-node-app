var SEARCH = require("./search")
var search = new SEARCH();

var searchParam = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (searchParam === "my-tweets") {
    search.findTweet(term);
} else if (searchParam ==="spotify-this-song") {
    search.findSong(term);

} else if (searchParam ==="movie-this") {
    search.findMovies(term);

} else if (searchParam ==="do-what-it-says") {

}




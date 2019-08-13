require("dotenv").config();
// var fs = require("file-system");
// var axios = require("axios");

// These variables are for SpotifyQuery
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// search var will be used everywhere
var search = process.argv[2];
//Divider to help organize the response
var divider = ".....................";
//Search term
var song = process.argv.slice(3).join(" ");
//if statements to make the query
if (!search) {
    search = "spotify-this-song";
};
if (!song) {
    song = "The Sign";
};
if (search == "spotify-this-song") {
    console.log("\n Searching for Song Info\n>\n>\n>");
};
//search function given via Spotify docs
spotify.search({ type: 'track', query: song, limit: 3 }).then(response => console.log(response)).catch(err => console.log(err));
//create variables containing JSON path from the response. add to songData array
var artists //list of artist(s) song was sung by
var songName // song name
var link //preview link
var album // list of album(s) song appeared on  
//variable to format response from the search request
var songData = [
    "Artist(s): " ,
    "Song Name: " ,
    "Preview Link: ",
    "Album: ",
].join("\n");

 
console.log(divider + " Info on: " + "'" + song + "' " + divider + "\n\n" + songData + "\n\n" + divider + divider + divider +"\n\n\n");








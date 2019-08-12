require("dotenv").config();
var fs = require("file-system");
var axios = require("axios");

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//Create contructor function
var SpotifyQuery = function () {
    //apparently divider is a good idea
    var divider = "/n .......................... /n";
    //Make up my own function name to search spotify
    this.findSong = song => {

        spotify.search({ type: 'track', query: song, limit: 5 }).then(response => console.log(response)).catch(err => console.log(err));

        var jsonData = response;
        var songData = [
            "Artist(s): " + jsonData,
            "Song Name: ",
            "Preview Link: ",
            "Album: ",
        ].join("/n");
        console.log(songData);

        fs.appendFile("log.txt", songData + divider, err => { if (err) throw err; console.log(songData); })

    };
};


module.exports = SpotifyQuery;
require("dotenv").config();
var fs = require("file-system");
var axios = require("axios");

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var songName = process.argv.split(3).join(" ");
var apiQuery = process.argv[2];

if (apiQuery == "spotify-this-song") {
    //Create contructor function
    var SpotifyQuery = function () {
        //apparently divider is a good idea
        var divider = "/n .......................... /n";
        //Make up my own function name to search spotify
        this.findSong = song => {
            song = process.argv.split(3).join(" ");
            spotify.search({ type: 'track', query: song }, (err, data) => {
                if (err) {
                    return console.log(divider + 'Error occurred: ' + err + divider);
                }

                var jsonData = data;
                var printData = [
                    "Artist(s): " + jsonData,
                    "Song Name: ",
                    "Preview Link: ",
                    "Album: ",
                ].join("/n");

                fs.appendFile("log.txt", printData + divider, err => { if (err) throw err; console.log(printData); })
            });
        };
    };
};

module.exports = SpotifyQuery;
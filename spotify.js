var SpotifyQuery = require("./liri");
var spotifyQuery = new SpotifyQuery(); 
var song = process.argv.slice(3).join(" ");
var search = process.argv[2];

if(!search){
    search = "spotify-this-song";
};

if(!song){
    song = "The Sign";
};

if(search = "spotify-this-song"){
    console.log("Searching for song info...");
    spotifyQuery.findSong(song);
};

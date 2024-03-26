// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Boheimian Rhapsody", artist: "Queen", genre: "Rock"},
    { title: "Billie", artist: "Micheal Jackson", genre: "Pop"},
    { title: "Purple Rain", artist: "Price", genre: "Pop"},
    { title: "Stairway to Heaven", artist:"Led Zeppelin", genre:"Rock"},
    { title: "Respect", artist: "Aretha Franklin", genre: "R&B"}
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "R&B"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    for (const guardian in guardians) {
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        const playlistElement = document.createElement('div');
        playlistElement.innerHTML = `<h2>${guardian}'s Playlist</h2><ul>${playlist.map(song =>
            `<li>${song.title} - ${song.artist}</li>`).join('')}</ul>`;
             document.getElementById('playlists').appendChild(playlistElement);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



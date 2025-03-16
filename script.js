const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');

// Array of songs and their corresponding album art
const songs = [
    { src: 'songs/song1.mp3', art: 'images/album1.jpg' },
    { src: 'songs/song2.mp3', art: 'images/album2.jpg' }
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const albumArt = document.getElementById('album-art');

// Function to load a song
function loadSong(index) {
    audioSource.src = songs[index].src;
    albumArt.src = songs[index].art;
    audioPlayer.load(); // Important: Reloads the audio player with the new source
}

// Button Controls
document.getElementById('next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to start if at the end
    loadSong(currentSongIndex);
    audioPlayer.play();
});

document.getElementById('prev').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

// Play and Pause Controls
document.getElementById('play').addEventListener('click', () => audioPlayer.play());
document.getElementById('pause').addEventListener('click', () => audioPlayer.pause());

// Load the first song when the page opens
window.addEventListener('load', () => loadSong(currentSongIndex));

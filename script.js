const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');

const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3']; 
let currentSongIndex = 0;

function loadSong(song) {
    audioPlayer.src = `songs/${song}`;
    audioPlayer.play();
}

playBtn.addEventListener('click', () => audioPlayer.play());
pauseBtn.addEventListener('click', () => audioPlayer.pause());

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
});

shuffleBtn.addEventListener('click', () => {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(songs[currentSongIndex]);
});

// Load the first song when the page loads
window.onload = () => loadSong(songs[currentSongIndex]);

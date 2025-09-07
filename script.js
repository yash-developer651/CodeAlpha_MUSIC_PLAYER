// Playlist (replace with your own mp3 files inside "songs" folder)
const songs = [
  { title: "SoundHelix Song 2", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "SoundHelix Song 3", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "SoundHelix Song 4", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { title: "SoundHelix Song 5", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];


let currentIndex = 0;
const audio = document.getElementById("audio");
const currentSong = document.getElementById("currentSong");
const playlistDiv = document.getElementById("playlist");

// Load playlist
function loadPlaylist(filteredSongs = songs) {
  playlistDiv.innerHTML = "";
  filteredSongs.forEach((song, index) => {
    const div = document.createElement("div");
    div.textContent = song.title;
    div.onclick = () => playSelectedSong(index, filteredSongs);
    playlistDiv.appendChild(div);
  });
}

loadPlaylist();

function playSelectedSong(index, list = songs) {
  currentIndex = songs.findIndex(s => s.title === list[index].title);
  audio.src = list[index].src;
  audio.play();
  currentSong.textContent = "▶️ Now Playing: " + list[index].title;
}

function playSong() {
  if (!audio.src) {
    playSelectedSong(currentIndex);
  } else {
    audio.play();
  }
}

function pauseSong() {
  audio.pause();
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSelectedSong(currentIndex);
}

function setVolume(val) {
  audio.volume = val;
}

function searchSong(query) {
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );
  loadPlaylist(filtered);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

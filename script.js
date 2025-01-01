//Declaring  Variables
let SongIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSong = document.getElementById("masterSong");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
//here im creating array of object
let song = [
  {
    SongName: "Let me Love you",
    filepath: "songs/0.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    SongName: "Heat Waves - Glass Animals",
    filepath: "songs/1.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    SongName: "Wiz Khalifa - See You Again ft. Charlie Puth",
    filepath: "songs/2.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    SongName: "Mark Ronson - Uptown Funk ft. Bruno Mars",
    filepath: "songs/3.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    SongName: "El Chombo - Dame Tu Cosita feat. Cutty Ranks",
    filepath: "songs/4.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    SongName: "Maroon 5 - Sugar ",
    filepath: "songs/5.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    SongName: "Taylor Swift - Shake It Off ",
    filepath: "songs/6.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    SongName: "OneRepublic - Counting Stars",
    filepath: "songs/7.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    SongName: "Justin Bieber - Sorry ",
    filepath: "songs/8.mp3",
    coverpath: "covers/9.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = song[i].coverpath;
  element.getElementsByClassName("songName")[0].textContent = song[i].SongName;
});

//Event Listening

//playing a song
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    audioElement.play();
    // gif.style.opacity = 1;
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-regular", "fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    // gif.style.opacity = 0;
    masterPlay.classList.remove("fa-regular", "fa-circle-pause");
    masterPlay.classList.add("fa-regular", "fa-circle-play");
    gif.style.opacity = 0;
  }
});

//seekbar adjustment
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      SongIndex = parseInt(e.target.id);
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${SongIndex}.mp3`;
      masterSong.innerText = song[SongIndex].SongName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (SongIndex >= 8) {
    SongIndex = 0;
  } else {
    SongIndex += 1;
  }
  audioElement.src = `songs/${SongIndex}.mp3`;
  masterSong.innerText = song[SongIndex].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  // // songItemPlay.classList.remove("fa-circle-play");
  // songItemPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (SongIndex <= 0) {
    SongIndex = 8;
  } else {
    SongIndex -= 1;
  }
  audioElement.src = `songs/${SongIndex}.mp3`;
  masterSong.innerText = song[SongIndex].SongName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

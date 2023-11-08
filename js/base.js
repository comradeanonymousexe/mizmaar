const invertButton = document.getElementById("invertButton");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const backgroundMusicbtn = document.getElementById("backgroundMusicbtn");
const backgroundMusic = document.getElementById("backgroundMusic");
const clickSound = document.getElementById("clickSound")

let isPlaying = false;


  // Play the background music when a click happens
  backgroundMusicbtn.addEventListener("click", () => {
    if (isPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    isPlaying = !isPlaying; // Toggle the play/pause state
  });

invertButton.addEventListener("click", () => {
    document.body.classList.toggle("inverted");

    sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline" : "none";
});



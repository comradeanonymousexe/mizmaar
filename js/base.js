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

function toggleDropdown() {
  var dropdownMenu = document.querySelector('.custom-dropdown-menu');
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  var dropdownMenu = document.querySelector('.custom-dropdown-menu');
  if (!event.target.matches('.custom-dropdown-toggle')) {
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    }
  }
}

function showPage(pageId) {
  // Hide all pages
  var pages = document.getElementsByClassName('page');
  for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
  }

  // Show the selected page
  var page = document.getElementById(pageId);
  if (page) {
      page.style.display = 'block';
  }
}


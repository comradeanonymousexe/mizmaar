window.addEventListener("DOMContentLoaded", function() {

  

  
  // Add a delay before removing the loading screen
  setTimeout(function() {
    document.getElementById("loader").classList.remove("d-flex");
    document.getElementById("loader").classList.add("d-none");
    document.getElementById("invertButton").classList.remove("d-none");
    document.getElementById("content").classList.add("d-flex");
  }, 2800); // Delay for 2 seconds
});



  // Get all the buttons
const mainButtons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4")
];

// Get all the content elements
const contents = [
  document.getElementById("button1content"),
  document.getElementById("button2content"),
  document.getElementById("button3content"),
  document.getElementById("button4content")
];

// Function to hide all contents
function hideAllContents() {
  contents.forEach(content => {
    content.style.display = "none";
  });
}

// Add a click event listener to each button
mainButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // If the content of the clicked button is already displayed, hide it
    if (contents[index].style.display === "block") {
      contents[index].style.display = "none";
    } else {
      // Hide all contents
      hideAllContents();

      // Show the content of the clicked button
      contents[index].style.display = "block";
    }
  });
});

const buttons = document.querySelectorAll("button");

  // Add a click event listener to each button
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Play the click sound
      const clickSound = document.getElementById("clickSound");
      backgroundMusic.pause();
      clickSound.play();
      backgroundMusic.play();
    });
});


const backgroundMusic = document.getElementById("backgroundMusic");

  // Play the background music when a click happens
window.addEventListener("click", () => {
    backgroundMusic.play();
});


const invertButton = document.getElementById("invertButton");

invertButton.addEventListener("click", () => {
    document.body.classList.toggle("inverted");

});

const tip = document.getElementById('tip');
const tips = [
  "Tip: Click anywhere in the Home Screen!",
  "Tip: Practice daily to acquisite earlier",
  "Tip: Make sure to have an Arabic surrounding!",
  "Tip: لا تستسلم",
  "Tip: ماذا تنتظر؟"
];

// Generate a random index
const randomIndex = Math.floor(Math.random() * tips.length);

// Set the text of the tip element with the random tip
tip.textContent = tips[randomIndex];


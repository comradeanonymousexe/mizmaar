window.addEventListener("DOMContentLoaded", function() {

  

  
  // Add a delay before removing the loading screen
  setTimeout(function() {
    document.getElementById("loader").classList.remove("d-flex");
    document.getElementById("loader").classList.add("d-none");
    document.getElementById("invertButton").classList.remove("d-none");
    document.getElementById("content").classList.add("d-flex");
  }, 2800); // Delay for 2 seconds
});


document.getElementById("button1").addEventListener("click", function() {
    const cssContent = document.getElementById("button1content");
    cssContent.style.display = cssContent.style.display === "none" ? "block" : "none";
});

document.getElementById("button2").addEventListener("click", function() {
    const jsContent = document.getElementById("button2content");
    jsContent.style.display = jsContent.style.display === "none" ? "block" : "none";
});

document.getElementById("button3").addEventListener("click", function() {
    const content3 = document.getElementById("button3content");
    content3.style.display = content3.style.display === "none" ? "block" : "none";
});

document.getElementById("button4").addEventListener("click", function() {
    const content4 = document.getElementById("button4content");
    content4.style.display = content4.style.display === "none" ? "block" : "none";
});


  // Get all the buttons
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

  // Play the background music when the page loads
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


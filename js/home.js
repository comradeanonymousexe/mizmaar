window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("content").classList.add("d-flex");
    document.getElementById("loader").classList.remove("d-flex");
    document.getElementById("loader").classList.add("d-none");


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
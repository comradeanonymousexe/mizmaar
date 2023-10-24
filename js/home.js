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
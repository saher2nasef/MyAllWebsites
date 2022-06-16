window.addEventListener("scroll", function() {
    var header = document.getElementById("nav");
    header.classList.toggle("nav", window.scrollY);


})
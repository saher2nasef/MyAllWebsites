window.addEventListener("scroll", function() {

    document.getElementById('nav').classList.toggle("style", window.scrollY);
    document.getElementById('btn-top').classList.toggle("left", window.scrollY);

})
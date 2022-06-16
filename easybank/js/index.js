let btn = document.querySelector(".toggle");
let ul = document.querySelector("header ul");
let Articles = document.querySelectorAll("[data-top]");
let body = document.querySelector("body");
btn.onclick = function() {
    this.classList.toggle("active");
    ul.classList.toggle("active");
}
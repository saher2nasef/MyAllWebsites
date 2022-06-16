// navbar
let nav = document.querySelector('nav');
window.onscroll = function() {
    nav.classList.toggle('navbar-add', window.scrollY);
};

// section serch
let buttonSearch = document.querySelector('.search');
let Close = document.querySelector('.fa-close');
let divOpen = document.querySelector('.search-section');
let search = document.getElementById('search');
buttonSearch.addEventListener('click', () => {
    divOpen.classList.toggle('open');
});
Close.addEventListener('click', () => {
    divOpen.classList.toggle('open');
});
search.addEventListener('click', () => {
    divOpen.classList.remove('open');
});
// add + 1 for prudect
let plus = document.querySelector('.plus');
let output = document.querySelector('.output');
let negatef = document.querySelector('.negatef');
let one = 1;
plus.onclick = function() {
    output.innerHTML = ++one;
};
negatef.onclick = function() {
    if (output.innerHTML <= 1) {} else {
        output.innerHTML = --one;
    }
};
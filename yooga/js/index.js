let arrow = document.querySelector('.arrow');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('top', window.scrollY);
    arrow.classList.toggle('right', window.scrollY);
});
let btn = document.getElementById('btn');
let bottom = document.querySelector('.bottom');
btn.addEventListener('click', () => {
    bottom.classList.toggle('open');
    btn.classList.toggle('active');
});
let btnOpen = document.getElementById('open');
let signDiv = document.querySelector('.sign-in');
let btnClose = document.querySelector('.fa-times');
let body = document.querySelector('body');
btnOpen.onclick = function() {
    signDiv.classList.toggle('open2');
    body.classList.toggle('wdith');
};
btnClose.onclick = function() {
    signDiv.classList.toggle('open2');
    body.classList.toggle('wdith');
};
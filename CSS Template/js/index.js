let text = document.getElementById('text'),
    body = document.getElementById('body'),
    close = document.getElementById('fa-remove'),
    close1 = document.getElementById('fa-remove2'),
    hidde = document.querySelector('.h1idde'),
    hidde1 = document.querySelector('.h2idde'),
    hidde2 = document.querySelector('.h3idde'),
    Tickets = document.querySelector('.Tickets'),
    btn = document.getElementById('btn');

btn.onclick = function() {
    text.classList.toggle('opacity');
    body.classList.toggle('opacity_');
    btn.classList.toggle('width');
};
hidde.onclick = () => {
    Tickets.classList.toggle('hidde');
};
hidde1.onclick = () => {
    Tickets.classList.toggle('hidde');
};
hidde2.onclick = () => {
    Tickets.classList.toggle('hidde');
};
close.onclick = () => {
    Tickets.classList.toggle('hidde');
};
close1.onclick = () => {
    Tickets.classList.toggle('hidde');
};

$(function() {
    'use strict';
    // adjust slider height
    var winH = $(window).height(),
        navH = $('.saher').innerHeight();
    $('.slider , .carousel-item').height(winH - navH);
});
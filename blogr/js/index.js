let $btns = document.querySelectorAll('.li-active');
let $btnToggle = document.querySelector('.toggle');
let $btnToggleImg = document.querySelector('.toggle img');
let $divAdd = document.querySelector('.media');
let $body = document.querySelector('body');

for (let i = 0; i < 3; i = i + 1) {
    $btns[i].onclick = function() {
        $btns[i].classList.toggle('active');
    };
}

$btnToggle.onclick = function() {
    $divAdd.classList.toggle('active');
    $btnToggle.classList.toggle('active');
};
let $img1 = document.querySelector('.one1');
let $img2 = document.querySelector('.two');
window.onresize = function() {
    if (window.innerWidth <= 931) {
        $img1.src = 'images/illustration-editor-mobile.png';
        $img2.src = 'images/illustration-laptop-mobile.png';
    } else if (window.innerWidth >= 931) {
        $img1.src = 'images/illustration-editor-desktop.png';
        $img2.src = 'images/illustration-laptop-desktop.png';
    }
};
window.onload = function() {
    if (window.innerWidth <= 931) {
        $img1.src = 'images/illustration-editor-mobile.png';
        $img2.src = 'images/illustration-laptop-mobile.png';
    } else if (window.innerWidth >= 931) {
        $img1.src = 'images/illustration-editor-desktop.png';
        $img2.src = 'images/illustration-laptop-desktop.png';
    }
};
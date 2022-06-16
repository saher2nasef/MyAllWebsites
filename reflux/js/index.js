let div = document.querySelectorAll('.another');
let img = document.querySelectorAll('.img');
let ul = document.querySelectorAll('.ulClick li');
let divImg = document.querySelectorAll('.img');
let img2 = document.querySelectorAll('.img img');
let $close = document.querySelector('.fa-close');
let overlay = document.querySelector('.overlay');
let another = document.querySelector('.another');
let $open = document.querySelectorAll('.text-info button');
let $button = document.querySelectorAll('.carousel-control-next');
let $minus = document.querySelectorAll('.carousel-control-prev');
let $plus = document.getElementById('plus');
//
//
div[1].onmouseover = function() {
    img[0].src = 'images/first-main-icon.png';
};
div[1].onmouseout = function() {
    img[0].src = 'images/first-white-icon.png';
};
//
div[2].onmouseover = function() {
    img[1].src = 'images/second-main-icon.png';
};
div[2].onmouseout = function() {
    img[1].src = 'images/second-white-icon.png';
};
//
div[3].onmouseover = function() {
    img[2].src = 'images/third-main-icon.png';
};
div[3].onmouseout = function() {
    img[2].src = 'images/third-white-icon.png';
};
//
div[4].onmouseover = function() {
    img[3].src = 'images/fourth-main-icon.png';
};
div[4].onmouseout = function() {
    img[3].src = 'images/fourth-white-icon.png';
};

//
//
ul[0].onclick = function() {
    ul[0].classList.add('active');
    ul[1].classList.remove('active');
    ul[2].classList.remove('active');
    ul[3].classList.remove('active');
};
ul[1].onclick = function() {
    ul[1].classList.add('active');
    ul[0].classList.remove('active');
    ul[2].classList.remove('active');
    ul[3].classList.remove('active');
};
ul[2].onclick = function() {
    ul[2].classList.add('active');
    ul[0].classList.remove('active');
    ul[1].classList.remove('active');
    ul[3].classList.remove('active');
};
ul[3].onclick = function() {
    ul[3].classList.add('active');
    ul[0].classList.remove('active');
    ul[1].classList.remove('active');
    ul[2].classList.remove('active');
};
$close.onclick = function() {
    overlay.style.display = 'none';
    another.classList.remove('mian');
};

$open[0].addEventListener('click', doOnclick, false);
$open[1].addEventListener('click', doOnclick, false);
$open[2].addEventListener('click', doOnclick, false);
$open[3].addEventListener('click', doOnclick, false);
$open[4].addEventListener('click', doOnclick, false);
$open[5].addEventListener('click', doOnclick, false);

function doOnclick() {
    overlay.style.display = 'block';
    another.classList.add('mian');
}

$button[0].onclick = function() {
    if ($plus.innerHTML == 1) {
        $plus.innerHTML = 2;
    } else if ($plus.innerHTML == 2) {
        $plus.innerHTML = 3;
    } else if ($plus.innerHTML == 3) {
        $plus.innerHTML = 4;
    } else if ($plus.innerHTML == 4) {
        $plus.innerHTML = 5;
    } else if ($plus.innerHTML == 5) {
        $plus.innerHTML = 6;
    } else if ($plus.innerHTML == 6) {
        $plus.innerHTML = 1;
    }
};
$minus[0].onclick = function() {
    if ($plus.innerHTML == 6) {
        $plus.innerHTML = 5;
    } else if ($plus.innerHTML == 5) {
        $plus.innerHTML = 4;
    } else if ($plus.innerHTML == 4) {
        $plus.innerHTML = 3;
    } else if ($plus.innerHTML == 3) {
        $plus.innerHTML = 2;
    } else if ($plus.innerHTML == 2) {
        $plus.innerHTML = 1;
    } else if ($plus.innerHTML == 1) {
        $plus.innerHTML = 6;
    }
};
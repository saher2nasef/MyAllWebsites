let input = document.querySelector('.sw');
let div = document.querySelector('.z-index');
let app = document.querySelector('.app');
let th = document.querySelector('.fa-th');
let btn = document.querySelector('.btns');
let clos1e = document.querySelector('.fa-close');

btn.addEventListener('click', () => {
    if (input.value == '') {
        alert('please enter your search');
    } else {
        let url = 'https://www.google.com/search?q=' + input.value;
        window.open(url);

    }
});
input.addEventListener('keyup', () => {
    if (input.value != '') {
        clos1e.style.display = 'flex';
    } else {
        clos1e.style.display = 'none';
    }
});
clos1e.onclick = function() {
    input.value = '';
    clos1e.style.display = 'none';
};
let btnToggle = document.querySelector('.toggleShow');
let ulNavbar = document.querySelector('.ulNavbar');
btnToggle.onclick = function() {
    btnToggle.classList.toggle('active');
    ulNavbar.classList.toggle('active');
};
let $loading = document.querySelector('.loading');

//  loading
window.onload = function() {
    $loading.style.display = 'none';
};
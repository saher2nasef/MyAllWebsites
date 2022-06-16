let navbar = document.querySelector('.navbar-expand-lg'),
    d$w = document.getElementById('welc'),
    input1 = document.getElementById('my-input'),
    input2 = document.getElementById('my-input1'),
    btn = document.getElementById('btn'),
    hidd = document.getElementById('container'),
    arrow = document.querySelector('.arrow2'),
    div = document.querySelector('.sign');
btn.addEventListener('click', () => {
    if (input1.value !== '' && input2.value !== '') {
        d$w.innerHTML = input1.value + ' ' + input2.value;
        div.style.display = 'none';
        hidd.style.display = 'block';
    }
});
window.addEventListener('scroll', () => {
    navbar.classList.toggle('navfixed', window.scrollY);
    arrow.classList.toggle('arrow', window.scrollY);
});
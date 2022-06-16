let btn = document.getElementById('btn'),
    show = document.querySelector('.show'),
    discription = document.querySelector('.discription');

show.addEventListener('click', () => {
    if (show.id == 'ss') {
        discription.style.height = 'auto';
        show.style.position = 'relative';
        show.style.top = '0px';
        show.innerHTML = 'hidde all';
        show.id = 's';
    } else {
        discription.style.height = '120px';
        show.style.position = 'absolute';
        show.style.top = '75px';
        show.innerHTML = 'show more';
        show.id = 'ss';
    }
});
let tuser = document.getElementById('username'),
    tage = document.getElementById('Age'),
    out = document.getElementById('output'),
    Your = document.getElementById('your$name'),
    days = document.querySelector('.days'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    loading = document.querySelector('.loading'),
    container = document.querySelector('.container'),
    btn = document.querySelector('.fa-moon'),
    body = document.getElementById('bo');
seconds.addEventListener('click', () => {
    if (tuser.value !== '' && tage.value !== '') {
        out.style.display = 'flex';
        Your.innerHTML = ',' + tuser.value;
        out.innerHTML = tage.value * 365 * 24 * 60 * 60;
    }
});
minutes.addEventListener('click', () => {
    if (tuser.value !== '' && tage.value !== '') {
        out.style.display = 'flex';
        Your.innerHTML = ',' + tuser.value;
        out.innerHTML = tage.value * 365 * 24 * 60;
    }
});
hours.addEventListener('click', () => {
    if (tuser.value !== '' && tage.value !== '') {
        out.style.display = 'flex';
        Your.innerHTML = ',' + tuser.value;
        out.innerHTML = tage.value * 365 * 24;
    }
});
days.addEventListener('click', () => {
    if (tuser.value !== '' && tage.value !== '') {
        out.style.display = 'flex';
        Your.innerHTML = ',' + tuser.value;
        out.innerHTML = tage.value * 365;
    }
});
setTimeout(() => {
    loading.style.display = 'none';
    container.style.display = 'block';
}, 5000);
btn.addEventListener('click', () => {
    if (btn.id == 'ss') {
        btn.setAttribute('class', 'fas fa-sun');
        body.classList.remove('body1');
        btn.id = 'sss';
    } else {
        btn.setAttribute('class', 'fas fa-moon');
        body.classList.add('body1');
        btn.id = 'ss';
    }
});
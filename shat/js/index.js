let input = document.getElementById('text');
let btn = document.getElementById('btn');
// users
let users1 = document.getElementById('users1');
let users2 = document.getElementById('users2');
let message1 = document.getElementById('message1');
let message2 = document.getElementById('message2');
let span = document.getElementById('span');
let saher = document.getElementById('button');

btn.onclick = () => {
    if (input.value == '') {
        alert('please enter your message');
    } else if (span.innerHTML == 'saher') {
        neaw = document.createElement('div');
        neaw.innerHTML =
            '<img src="img/saher.jpg" class="img" >' +
            '&nbsp; &nbsp;  ' +
            '<p class="fw-bold saher">' +
            text.value +
            '</p>';
        message1.append(neaw);
        neaw.classList.add('post');
        input.value = '';
        input.style.height = '45px';
    } else if (span.innerHTML == 'joseph') {
        neaw = document.createElement('div');
        neaw.innerHTML =
            '<p class="fw-bold saher background">' +
            text.value +
            '</p>' +
            '&nbsp; &nbsp; ' +
            '<img src="img/joseph.jpg" class="img" >';
        message1.append(neaw);
        neaw.classList.add('post', 'mleft');
        input.value = '';
        input.style.height = '45px';
    }
};
users1.onclick = () => {
    span.innerHTML = 'joseph';
    alert('you joseph');
};
users2.onclick = () => {
    span.innerHTML = 'saher';
    alert('you saher');
};

window.addEventListener('keydown', checkKeyPress, false);

function checkKeyPress(key) {
    if (key.keyCode == '13') {
        if (input.value == '') {
            alert('please enter your message');
        } else if (span.innerHTML == 'saher') {
            neaw = document.createElement('div');
            neaw.innerHTML =
                '<img src="img/saher.jpg" class="img" >' +
                '&nbsp; &nbsp;  ' +
                '<p class="fw-bold saher">' +
                text.value +
                '</p>';
            message1.append(neaw);
            neaw.classList.add('post');
            input.value = '';
        } else if (span.innerHTML == 'joseph') {
            neaw = document.createElement('div');
            neaw.innerHTML =
                '<p class="fw-bold saher">' +
                text.value +
                '</p>' +
                '&nbsp; &nbsp; ' +
                '<img src="img/joseph.jpg" class="img" >';
            message1.append(neaw);
            neaw.classList.add('post', 'mleft');
            input.value = '';
        }
    }
}

function auto_grow(element) {
    element.style.height = '45px';
    element.style.height = element.scrollHeight + 'px';
}
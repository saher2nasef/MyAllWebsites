let $loading = document.querySelector('.loading');
let $btnToggle = document.querySelector('.navbar-toggler');
let $navbar = document.querySelector('.navbar');
let $DropDown = document.querySelector('.Drop-Down');
let $DropDownUl = document.querySelector('.Drop-Down ul');
let $btnSliderDiv = document.querySelector('.child');
let $Div1 = document.querySelectorAll('.child .div1');
let $Toggle2 = document.querySelectorAll('.Toggle2');
let $btnShow = document.querySelectorAll('.allButtons .Toggle2 .btnShow');
let $innerButtons = document.getElementById('innerButtons');

//  loading
window.onload = function() {
    $loading.style.display = 'none';
    window.scrollTo(0, 0);

};
// btn mune
$btnToggle.onclick = function() {
    $btnToggle.classList.toggle('active');
};

// navbar scroll
window.onscroll = function() {
    $navbar.classList.toggle('active', window.scrollY);
};

// navbar Drop Down
$DropDown.onclick = function() {
    $DropDown.classList.toggle('active');
};

/////////////////////////////////



for (let i = 0; i < $btnSliderDiv.children.length; i++) {
    $innerButtons.innerHTML += `<button class="BtnSlides" onclick="Position(${i}00)"></button>`;
}
let position2;

function Position(posirion) {
    if (posirion > 0) {
        position2 = posirion - 2;
    } else {
        position2 = posirion;
    }
    $btnSliderDiv.style.left = "-" + position2 + "%";
    console.log(posirion);
}

for (let i = 0; i < $Div1.length; i++) {
    $Div1[i].style.width = $btnSliderDiv.parentElement.offsetWidth + "px";
}
window.onresize = function() {
    for (let i = 0; i < $Div1.length; i++) {
        $Div1[i].style.width = $btnSliderDiv.parentElement.offsetWidth + "px";
    }
}


let butstons = document.querySelectorAll(".BtnSlides");

butstons[0].classList.add("active");

butstons.forEach((button) => {
    button.addEventListener('click', function() {
        butstons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

///////
// divs show and hidden


$btnShow[0].classList.add("active");

$btnShow.forEach((li) => {
    li.onclick = function() {
        $btnShow.forEach((li) => { li.classList.remove("active"); })
        this.classList.add("active");
    }
})


//////////////////////////////////////////////

let progress = document.querySelector(".progress");
let body = document.querySelector("body");

window.onscroll = function() {
    let heightWindow = window.scrollY;
    let style = getComputedStyle(body);
    let height = parseInt(style.height);
    let heightEdiotr = height - 821;
    progress.style.width = `${Math.round((Math.floor(heightWindow) * 100) / heightEdiotr)}%`;
}
// btn toggle header
let toggle = document.querySelector(".toggle");
let ul = document.querySelector("header ul");
toggle.onclick = function() {
    this.classList.toggle("active");
    ul.classList.toggle("active");
};


// welcome div input
let welcome = document.getElementById("welcome");
let wInput = document.querySelector(".input input");
let wButton = document.querySelector(".input button");
let divInput = document.querySelector(".input");
let sign$in = document.querySelector(".sign-in");
wButton.onclick = function() {
    if (wInput.value.length >= 20) {
        alert("this is not good")
    } else {
        divInput.classList.add("active");
    }
    if (wInput.value == "") {
        localStorage.clear();
    } else {
        localStorage.setItem("name", wInput.value);
        welcome.innerHTML = localStorage.getItem("name");
    }
    location.reload();
};

window.onload = function() {
    if (localStorage.length >= 1) {
        sign$in.innerHTML = "sign out";

    } else {
        sign$in.innerHTML = "sign in";
    }

};
sign$in.onclick = function() {
    if (this.innerHTML == "sign out") {
        location.reload();
        localStorage.clear();
    } else { divInput.classList.add("active"); }
}
welcome.innerHTML = localStorage.getItem("name");
// output data in div welcome


wInput.onkeyup = function() {
    if (wInput.value.length >= 20) {
        alert("this is not good");
    }
    // console.log(wInput.value.length);
}

// header class add
let header = document.querySelector("header");
window.onscroll = function() {
    header.classList.toggle("Active", window.scrollY);

    let section = document.querySelectorAll('.section');
    let navlinks = document.querySelectorAll('header ul li a');
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.parentElement.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').parentElement.classList.add('active');
            });
        }
    });
};

// send_data
let send_data = document.querySelector(".send_data");
let book = document.querySelectorAll(".book input");
send_data.onclick = function() {
    for (let index = 0; index < book.length; index++) {
        // if (book) {} else {
        //     this.setAttribute("href", "https://www.facebook.com/gosephra3d") 
        // }
        if (book[0].value == "", book[1].value == "", book[2].value == "" || book[1].value == "" || book[0].value == "" ||
            book[2].value == "") {
            this.setAttribute("href", "#");

        } else {
            this.setAttribute("href", "https://www.facebook.com/gosephra3d");
        }

    }

}
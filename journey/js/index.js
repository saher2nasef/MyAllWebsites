let body = document.querySelector("body");
// nav bar
let inner = document.querySelector("header");

if (body.getAttribute("data-active") == 0) {
    inner.innerHTML += `
    <!-- starts navbar -->
        <nav>
            <img src="images/logo1.png" alt="">
            <ul>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="pages/pages1.html">book now</a>
                </li>
            </ul>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    <!-- ends navbar -->
`;
} else if (body.getAttribute("data-active") > 0) {
    inner.innerHTML += `
    <!-- starts navbar -->
        <nav>
            <img src="images/logo1.png" alt="">
            <ul>
                <li>
                    <a href="../index.html">home</a>
                </li>
                <li>
                    <a href="pages1.html">book now</a>
                </li>
            </ul>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    <!-- ends navbar -->
`;
}


// add class active in the button mneu
let btn = document.querySelector("nav button");
let ul = document.querySelector("nav ul");
btn.onclick = function() {
    this.classList.toggle("active");
    ul.classList.toggle("active");
};



// ul li add class active on reload


ul.children[body.getAttribute("data-active")].classList.add("active");

// ul li add class active
$(function() {
    let ul = $("nav ul");
    let li = $("nav ul li");
    li.click(function() {
        ul.children().removeClass("active")
        $(this).addClass("active");
    })
});







// text box mneu
let div = document.createElement("ul");
div.setAttribute("class", "mneu");
div.innerHTML = `
    <li onclick="relod()">relod</li>
`;
body.prepend(div);
window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    div.style.top = event.offsetY + "px";
    div.style.left = event.offsetX + "px";
    div.classList.add("active");
});
window.addEventListener("click", () => {
    div.classList.remove("active");
});

function relod() {
    location.reload();
}

// check the booking {

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let Phone = document.getElementById("phone");
let Email = document.getElementById("email");
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");
let rooms = document.getElementById("rooms");
let beds = document.getElementById("beds");
let btnBooking = document.querySelector(".book-now  .booking");


// output the input

let firstNameOutput = document.querySelector(".info .firstName");
let lastNameOutput = document.querySelector(".info .lastName");
let outputDays = document.querySelector(".info .output-days");
let outputRooms = document.querySelector(".info .output-rooms");
let outputBeds = document.querySelector(".info .output-beds");
let price = document.querySelector(".info .price");
let email = document.querySelector(".info .email");
let phone = document.querySelector(".info .phone");
let Arrival = document.querySelector(".info .Arrival");
let Departure = document.querySelector(".info .Departure");
let serial = document.querySelector(".info .serial");
let priceDay = 100;
let divOutput = document.querySelector('body[data-active="1"] .info');

btnBooking.onclick = function() {


    // new date for vairbles
    let checkInDate = new Date(checkIn.value);
    let checkOutDate = new Date(checkOut.value);


    // get for Years Months Days
    checkInYear = checkInDate.getFullYear();
    checkIngetMonth = checkInDate.getMonth() + 1;
    checkInDay = checkInDate.getDate();

    checkOutYear = checkOutDate.getFullYear();
    checkOutgetMonth = checkOutDate.getMonth() + 1;
    checkOutDay = checkOutDate.getDate();

    // Calc user change
    let Years = checkInYear - checkOutYear;
    let Months = checkIngetMonth - checkOutgetMonth;
    let Days = checkInDay - checkOutDay;

    let output = -Years * 365 + -Months * 30 + -Days;

    // inner Output

    firstNameOutput.innerHTML = firstName.value;
    lastNameOutput.innerHTML = lastName.value;
    outputDays.innerHTML = output + 1;
    outputRooms.innerHTML = rooms.value;
    outputBeds.innerHTML = beds.value;
    email.innerHTML = Email.value;
    phone.innerHTML = Phone.value;
    Arrival.innerHTML = checkIn.value;
    Departure.innerHTML = checkOut.value;
    price.innerHTML = Number(rooms.value * outputDays.innerHTML * priceDay) + "$";
    setInterval(() => {
        divOutput.classList.add("active")
    }, 2000);

    let characters = '123456789!@#$%&qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let charactersCount = 10;
    let randomSeria = '';
    for (let index = 0; index < charactersCount; index++) {
        randomSeria += characters[Math.floor(Math.random() * characters.length)];
    }
    serial.innerHTML = firstName.value[0] + "-" + lastName.value[0] + "-" + randomSeria;
};







// }
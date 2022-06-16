// add to do list
let add = document.getElementById("add");
let body = document.querySelector(".input");
let input2 = document.querySelector(".input-in");
let one = sessionStorage.length;
add.onclick = function() {
    let two = one++;
    let templets = `
        <div class="new-list" data-length="${two}">
            <h1>${input2.value}</h1>
            <div class="inner">
                <input type="text" class="text">
                <button><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <ul>
            </ul>
            <div class="length">

                <p> length the list is <span>0</span></p>
                <button>Clear All</button>
            </div>
        </div>
    `;
    sessionStorage.setItem(two, templets);
    location.reload();
};

for (let i = 0; i < sessionStorage.length; i++) {
    body.innerHTML += sessionStorage.getItem(i);
    let section = document.querySelectorAll(".new-list");
    section[i].getAttribute("data-length");
}


// new to do message
let ul = document.querySelectorAll(".new-list ul");
let li = document.querySelectorAll(".new-list ul li");
let lengthDiv = document.querySelectorAll(".new-list .length span");
let lengthDivBuuton = document.querySelectorAll(".new-list .length button");
let num = 0;


let section = document.querySelectorAll(".new-list");
let btnPrint = document.querySelectorAll(".new-list .inner button");
let input = document.querySelectorAll(".new-list .inner input");

for (let index = 0; index < body.children.length; index++) {
    btnPrint[index].onclick = function() {
        let getlocalStorage = localStorage.getItem("new todo" + btnPrint[index].parentElement.parentElement.getAttribute("data-length"));
        if (getlocalStorage == null) {
            litsArr = [];
        } else {
            litsArr = JSON.parse(getlocalStorage);
        }
        litsArr.push(input[index].value);
        localStorage.setItem("new todo" + btnPrint[index].parentElement.parentElement.getAttribute("data-length"), JSON.stringify(litsArr));

        shows();
        length();
    };
    shows();

    function shows() {

        let getlocalStorage = localStorage.getItem("new todo" + btnPrint[index].parentElement.parentElement.getAttribute("data-length"));
        if (getlocalStorage == null) {
            litsArr = [];
        } else {
            litsArr = JSON.parse(getlocalStorage);
        }
        let newList = "";
        let one2 = 0;
        for (let w = 0; w < JSON.parse(localStorage.getItem("new todo" + btnPrint[index].parentElement.parentElement.getAttribute("data-length"))).length; w++) {
            let wo = one2++;
            newList += `
                <li>
                    <p>${JSON.parse(localStorage.getItem("new todo" + btnPrint[index].parentElement.parentElement.getAttribute("data-length")))[w]}</p>
                    <i class="fas fa-trash-alt" data-click="${wo++}"></i>
                </li>
            `;
        }
        ul[index].innerHTML = newList;
    }
    let remove = document.querySelectorAll(".new-list ul li i");
    for (let btn = 0; btn < remove.length; btn++) {
        remove[btn].onclick = function() {
            let btn2 = "new todo" + btnPrint[this.parentElement.parentElement.parentElement.getAttribute("data-length")].parentElement.parentElement.getAttribute("data-length");
            let array = JSON.parse(localStorage.getItem(btn2));
            array.splice(this.getAttribute("data-click"), 1);
            localStorage.setItem(btn2, JSON.stringify(array));
            console.log(array);

            location.reload();
        };
    }
    length();

    function length() {
        lengthDiv[index].innerHTML = ul[index].children.length;
    }
    lengthDivBuuton[index].onclick = function() {
        localStorage.clear();
        length();
        location.reload();
    };
}
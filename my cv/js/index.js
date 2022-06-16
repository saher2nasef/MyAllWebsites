let mywebsites = document.querySelectorAll(".all-my-websites button");
for (let index = 0; index < mywebsites.length; index++) {
    mywebsites[index].onclick = function() {
        document.querySelector(".all-my-websites + div >iframe").src = this.getAttribute("data-src");
    }
}
//outpout
let outpout = document.querySelectorAll(".outpout");
let width = document.querySelectorAll(".width");

for (let index = 0; index < outpout.length; index++) {
    // console.log(outpout[index].getAttribute("data-width"));
    outpout[index].innerHTML = outpout[index].getAttribute("data-width");
    width[index].style.width = outpout[index].getAttribute("data-width");
}
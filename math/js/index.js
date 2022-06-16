let input = document.querySelector(".input");
let select = document.querySelector(".select");
let output = document.querySelector(".output");
let other = document.querySelector(".other");
let values;
input.onkeyup = function () {
    values = Number(this.value);
    if (select.value === "op1") {
        output.innerHTML = (values * values) + values - 5;
        other.innerHTML = `${input.value}<sup>2</sup> + ${input.value} - 5`;
    } else if (select.value === "op2") {
        output.innerHTML = (values * values * values) + 15 + values;
        other.innerHTML = `${input.value}<sup>3</sup>+15+${input.value}`;
    } else if (select.value === "op3") {
        output.innerHTML = ((values * values * values * values) + (values * values)) * 5;
        other.innerHTML = `${input.value}<sup>4</sup>+${input.value}<sup>2</sup> * 5`;
    } else if (select.value === "op4") {
        output.innerHTML = (values - 3) - 3;
        other.innerHTML = `(${input.value} + 3) = ${input.value} - 3`;
    }
}
select.onchange = function () {
    values = Number(input.value);
    if (select.value === "op1") {
        output.innerHTML = (values * values) + values - 5;
        other.innerHTML = `${input.value}<sup>2</sup> + ${input.value} - 5`;
    } else if (select.value === "op2") {
        output.innerHTML = (values * values * values) + 15 + values;
        other.innerHTML = `${input.value}<sup>3</sup>+15+${input.value}`;
    } else if (select.value === "op3") {
        output.innerHTML = ((values * values * values * values) + (values * values)) * 5;
        other.innerHTML = `${input.value}<sup>4</sup>+${input.value}<sup>2</sup> * 5`;
    } else if (select.value === "op4") {
        output.innerHTML = (values - 3) - 3;
        other.innerHTML = `(${input.value} + 3) = ${input.value} - 3`;
    }
}
setInterval(() => {
    if (input.value == "") {
        output.innerHTML = "";
    }
}, 0);
backrounds = setInterval(() => {
    let arrayImg = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
    let tow = arrayImg.length;
    body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(images/" + arrayImg[Math.floor(Math.random() * tow)] + ")";
}, 6000);
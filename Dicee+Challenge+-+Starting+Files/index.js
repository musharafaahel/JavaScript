var randomNumber1 = Math.trunc((Math.random() * 6) + 1);
// console.log(randomNumber1);


var dice1  = "./images/dice"+randomNumber1+".png";

var randomNumber2 = Math.trunc(Math.random() * 6 + 1);
// console.log(randomNumber2);

var dice2  = "./images/dice"+randomNumber2+".png";


document.querySelector(".img1").setAttribute("src",dice1);

document.querySelector(".img2").setAttribute("src", dice2);



if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Won!!!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Won!!!";
}else {
    document.querySelector("h1").textContent = "Draw!!!😁";
}
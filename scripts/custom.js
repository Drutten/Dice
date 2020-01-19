
/* 3d animated dice, alternative animation for IE 10 and IE 11 (CSS)*/
'use strict'

var imgNames = ['one', 'two', 'three', 'four', 'five', 'six'];
var diceImg = document.getElementsByClassName("dice-img");
var dice = document.getElementById('dice');
var audio = new Audio('dice4.mp3');

//Buttons
var diceButton = document.getElementById('dice-button');
diceButton.addEventListener('click', roll);
var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

//Function for dice button
function roll() {
    diceButton.style.display = 'none';
    resetButton.style.display = 'block';
    audio.play();
    dice.classList.add('my-animation');
    var r = getRandom0ToN(5); //A number 0 - 5
    //setTimeout function needed for IE animation
    setTimeout(function(){
        diceImg[0].src = "bilder/" + imgNames[r] + ".jpg";
    }, 900);    
}


//Function for reset button
function reset() {
    diceButton.style.display = 'block';
    resetButton.style.display = 'none';
    dice.classList.remove('my-animation');
    for(var i = 0; i < diceImg.length; i++){
        diceImg[i].src = "bilder/" + imgNames[i] + ".jpg";
    }
}


//Returns random number 0 to n inclusive
function getRandom0ToN(n) {
    return Math.floor(Math.random() * (n + 1)); /* 0 to n */
}







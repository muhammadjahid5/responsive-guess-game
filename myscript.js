"use strict";
//Storing classes to variables
const domBody = document.querySelector("body");
const check = document.querySelector(".check");
const winMessage = document.querySelector(".message");
let guess = document.querySelector(".guess");
const hiddenNumber = document.querySelector(".number");
let compareScore = document.querySelector(".score");
const currentScore = document.querySelector(".currentScore");
let score = 20;
let winnigScore = 0;
const restore = document.querySelector(".again");
const form = document.querySelector(".myForm");
const quite = document.querySelector(".quite");
const highScore = document.querySelector(".highscore");
let compareHighScore = 0;
const mainTitle = document.querySelector(".mainTitle");

//Generating a random Number

let randomNumber = Math.trunc(Math.random() * 20 + 1);

// Compare the gusses

check.addEventListener("click", function () {
  valueChecker();
});

const valueChecker = function () {
  let getValue = Number(guess.value);

  if (!getValue) {
    winMessage.textContent = "No Guess Founded♨";
    valueDecreaser();
  } else if (getValue === randomNumber) {
    winMessage.textContent = "Hurray,You have Choosed The Correct Number🎉🎉";
    mainTitle.textContent = "You Are The Winner✨✨";
    valueIncreaser();
    manupulatingPage();
    hiddenNumber.textContent = randomNumber;
  } else if (getValue !== randomNumber) {
    getValue > randomNumber
      ? (winMessage.textContent = "Your guess is Higher")
      : (winMessage.textContent = "Your Guess is lower");
    valueDecreaser();
  }
  // else if (getValue > randomNumber) {
  //   winMessage.textContent = "Your guess is higher";
  //   valueDecreaser();
  // } else if (getValue < randomNumber) {
  //   winMessage.textContent = "The Guess Is Lower 😥";
  //   valueDecreaser();
  // }
};
// decrement
let valueDecreaser = function () {
  score--;
  let myValue = (compareScore.textContent = score);
  if (score === 0) winMessage.textContent = "Sorry You Have lose the Game";
  return myValue;
};
//increment
const valueIncreaser = function () {
  winnigScore++;
  let highValue = (currentScore.textContent = winnigScore);
  return highValue;
};
// Changing the dom while answear is true
const manupulatingPage = function () {
  domBody.style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").style.transition = "0.5s";
};
// Restoring The entire game
restore.addEventListener("click", () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  mainTitle.textContent = "Guess My Number!";
  winMessage.textContent = "Start guessing...";
  compareScore.textContent = score;
  hiddenNumber.textContent = "?";
  guess.value = "";
  domBody.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// Quite the game
quite.addEventListener("click", () => {
  let value = valueIncreaser() - 1;
  if (value > compareHighScore) {
    compareHighScore = value;
    highScore.textContent = compareHighScore;
  }
  mainTitle.textContent = "Guess My Number!";
  winnigScore = 0;
  currentScore.textContent = winnigScore;
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  winMessage.textContent = "Start guessing...";
  compareScore.textContent = score;
  hiddenNumber.textContent = "?";
  guess.value = "";
  domBody.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

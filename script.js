"use strict";

// Generate random number
function randomNumber() {
  let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  return hiddenNumber;
}

let score = 20;
let highscore = 0;

// Updates the current score based on the player's guess
function scoreChange() {
  document.getElementById("current-score").innerHTML = `${score - 1}`;
  score--;
  if (score === 0) {
    document.getElementById("message").innerHTML =
      "You lost the game. Reset the game!";
    document.body.style.backgroundColor = "#4d0099";
  }
}

// Updates the highscore based on the round's score;
function highScoreChange() {
  if (score > highscore) {
    highscore = score;
    document.getElementById("highscore").innerHTML = score;
  }
}

let hiddenValue = randomNumber();

// Checks whether the input value and the hidden number are equal
function validation() {
  let inputNumber = parseInt(document.getElementById("number-input").value);

  if (!inputNumber) {
    document.getElementById("message").innerHTML = "Please choose a number!";
  } else if (hiddenValue === inputNumber) {
    document.getElementById("hidden").innerHTML = inputNumber;
    document.getElementById("message").innerHTML =
      "You got it! Reset or try to get a higher score.";
    document.body.style.backgroundColor = "green";
    hiddenValue = randomNumber();
    highScoreChange();
    document.getElementById("current-score").innerHTML = 20;
    score = 20;
  } else if (hiddenValue > inputNumber) {
    document.getElementById("message").innerHTML = "Too low!";
    document.getElementById("hidden").innerHTML = "?";
    document.body.style.backgroundColor = "#313030";
    scoreChange();
  } else {
    document.getElementById("message").innerHTML = "Too high!";
    document.getElementById("hidden").innerHTML = "?";
    document.body.style.backgroundColor = "#313030";
    scoreChange();
  }
}

// Resets the game
function resetScore() {
  score = 20;
  highscore = 0;
  document.body.style.backgroundColor = "#313030";
  document.getElementById("hidden").innerHTML = "?";
  document.getElementById("message").innerHTML = "Start guessing:";
  document.getElementById("current-score").innerHTML = score;
  document.getElementById("highscore").innerHTML = highscore;
  document.getElementById("number-input").value = " ";
}

"use strict";

let score = 20;
let highscore = 0;
let hiddenValue = randomNumber();

// Generate random number
function randomNumber() {
  let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  return hiddenNumber;
}

// Updates the current score based on the player's guess
function scoreChange() {
  document.getElementById("current-score").innerHTML = `${score - 1}`;
  score--;
  if (score === 0) {
    messageDisplay("You lost the game. Reset the game!");
    document.body.style.backgroundColor = "#4d0099";
  }
}

// Updates the highscore based on the round's score;
function highScoreChange() {
  if (score > highscore) {
    highscore = score;
    hScoreDisplay(score);
  }
}

//Refactoring with functions

function messageDisplay(message) {
  document.getElementById("message").innerHTML = message;
}

function hiddenDisplay(hidden) {
  document.getElementById("hidden").innerHTML = hidden;
}

function currentScoreDisplay(currentScore) {
  document.getElementById("current-score").innerHTML = currentScore;
}

function hScoreDisplay(hScore) {
  document.getElementById("highscore").innerHTML = hScore;
}
//

// Checks whether the input value and the hidden number are equal
function validation() {
  let inputNumber = parseInt(document.getElementById("number-input").value);
  if (!inputNumber) {
    messageDisplay("Please choose a number!");
  } else if (hiddenValue === inputNumber) {
    hiddenDisplay(inputNumber);
    messageDisplay("You got it! Reset or try to get a higher score.");
    document.body.style.backgroundColor = "green";
    hiddenValue = randomNumber();
    highScoreChange();
    currentScoreDisplay(20);
    score = 20;
  } else if (hiddenValue !== inputNumber) {
    messageDisplay(inputNumber > hiddenValue ? "Too high!" : "Too low!");
    hiddenDisplay("?");
    document.body.style.backgroundColor = "#313030";
    scoreChange();
  }
}

//  Old check
//   else if (hiddenValue > inputNumber) {
//     document.getElementById("message").innerHTML = "Too low!";
//     document.getElementById("hidden").innerHTML = "?";
//     document.body.style.backgroundColor = "#313030";
//     scoreChange();
//   } else {
//     document.getElementById("message").innerHTML = "Too high!";
//     document.getElementById("hidden").innerHTML = "?";
//     document.body.style.backgroundColor = "#313030";
//     scoreChange();
//   }
// }

// Resets the game
function resetScore() {
  score = 20;
  highscore = 0;
  document.body.style.backgroundColor = "#313030";
  hiddenDisplay("?");
  messageDisplay("Start guessing:");
  currentScoreDisplay(score);
  hScoreDisplay(highscore);
  document.getElementById("number-input").value = " ";
}

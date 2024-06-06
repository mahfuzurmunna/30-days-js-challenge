let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHighValue = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
// console.log(randomNumber);

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);

    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please enter Number > 1");
  } else if (guess > 100) {
    alert("Please enter a Number < 100");
  } else {
    prevGuess.push(guess);

    if (numGuess === 11) {
      cleanupGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);

    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is High`);
  }
}

function cleanupGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHighValue.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame" style="padding:10px 5px; background-color:grey; border-radius:10px; color:white; cursor:pointer">Start new Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHighValue.innerHTML = "";

    playGame = true;
  });
}


// VARIABLES FOR THE DOM ELEMENTS

const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");


// WORDS ARRAY

const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


// INITIAL VARIABLES

let randomWord;
let score = 0;
let time = 10;


// ADD RANDOM WORD TO DOM

function addWordToDOM() {

  const randomIndex = Math.floor(Math.random() * words.length);

  randomWord = words[randomIndex];

  word.textContent = randomWord;

}


// UPDATE SCORE

function updateScore() {

  score++;

  scoreEl.textContent = score;

}


// INPUT EVENT LISTENER

text.addEventListener("input", function() {

  if (text.value === randomWord) {

    updateScore();

    addWordToDOM();

    time += 5;

    timeEl.textContent = time + "s";

    text.value = "";

  }

});


// UPDATE TIMER

function updateTime() {

  time--;

  timeEl.textContent = time + "s";

  if (time <= 0) {

    time = 0;

    gameOver();

  }

}


// GAME OVER

function gameOver() {

  clearInterval(timer);

  endgameEl.style.display = "flex";

  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

}


// SETTINGS BUTTON EVENT LISTENER

settingsBtn.addEventListener("click", function() {

  settings.classList.toggle("hide");

});


// SETTINGS FORM EVENT LISTENER

settingsForm.addEventListener("change", function() {

  if (difficultySelect.value === "easy") {

    time = 10;

  } else if (difficultySelect.value === "medium") {

    time = 7;

  } else if (difficultySelect.value === "hard") {

    time = 5;

  }

  timeEl.textContent = time + "s";

});


// START THE GAME

addWordToDOM();

const timer = setInterval(updateTime, 1000);

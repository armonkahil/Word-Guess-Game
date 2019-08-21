// Declare variables

// Bank of words to guess
// wordBank = ["Payton",
//             "Sayers",
//             "Ditka",
//             "Perry",
//             "Urlacher",
//             "Cutler",
//             "Dent",
//             "Hester",
//             "Singletary",
//             "Butkus"
// ];

var wordBank = ["Hello"];

// Variable set for random word picked
var wordMatch = "";

// array for picked word letters
var wordLetters = [];

// array for correct letters picked
var correctGuesses = [];

// array for incorrect letters picked
var incorrectGuesses = [];

// variable for the number of incorrect guesses
var counter = 10;

// variable for the number of wins
var wins = 0;

//variable for the number of losses
var losses = 0;





// gameboard();
//function to pick random word from word bank
wordMatch = wordBank[Math.floor(Math.random() * wordBank.length)];

console.log(wordMatch);

//converts word picked to array
wordLetters = wordMatch.split("");
var emptyBoard = [];
function setGame() {
  console.log("setting board");
  
  console.log("building empty spaces array");
  for (var i=0; i< wordLetters.length; i++){
    emptyBoard[i] = " _";
    console.log(emptyBoard.join(" "));
  }
  document.getElementById("guessCounter").innerHTML = counter;
  document.getElementById("gameBoard").innerText = emptyBoard.join(" ");
}

setGame()

document.onkeyup = function(event) {
  var guess = event.key;
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    console.log("The " + guess + " key is pressed.");
    checkGuess(guess);
  } else {
    console.log("wrong key pressed, try again.");
  }
};

//Function to check if the letter is in the word.
function checkGuess(letter) {
  console.log("checking letter " + letter + " in checkGuess.");
  var correctPick = false;

  for (var i = 0; i < wordLetters.length; i++) {
    console.log("checking " + letter + " against " + wordLetters[i] + ".");
    if (wordLetters[i].toLowerCase() === letter.toLowerCase()) {
      console.log(letter + " has been found.");
      correctPick = true;
      correctGuesses[i], emptyBoard[i] = letter;
      console.log(letter + " has been added to correctGuesses array as " + correctGuesses[i] + ".");
      gameboard()
      if (correctGuesses === wordMatch.split()) {
        console.log("checking correctGuesses vs wordMatch.");
        window.alert("you win");
        wins++;
      }
    }
    
    gameboard()
  }

  if (!correctPick) {
    console.log("running !correctPick");
    if (!incorrectGuesses.includes(letter)) {
      incorrectGuesses.push(letter);
      counter--;
      correctPick = false;
      console.log("letter added to incorrectly " + incorrectGuesses);
      console.log("game counter " + counter);
    }
    if (counter === 0) {
      console.log("end of game");
      losses++;
    }
    
  }
  
  gameboard()
}

function gameboard() {
  document.getElementById("gameBoard").innerHTML = emptyBoard.join(" ");
  document.getElementById("correctGuess").innerHTML = correctGuesses.join(" ");
  document.getElementById("incorrectGuess").innerHTML = incorrectGuesses.join(" ");
  document.getElementById("guessCounter").innerHTML = counter;
  document.getElementById("WinsCount").innerHTML = wins;
  document.getElementById("lossCount").innerHTML = losses;

}

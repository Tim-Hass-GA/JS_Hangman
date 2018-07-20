console.log('js is here');

// load and cache images for gallows
const imgStart = new Image(250,250);
imgStart.src = "images/start.gif";

const img01 = new Image(250,250);
img01.src = "images/01.gif";

const img02 = new Image(250,250);
img02.src = "images/02.gif";

const img03 = new Image(250,250);
img03.src = "images/03.gif";

const img04 = new Image(250,250);
img04.src = "images/04.gif";

const img05 = new Image(250,250);
img05.src = "images/05.gif";

const img06 = new Image(250,250);
img06.src = "images/06.gif";

const gallowsImages = [ imgStart, img01, img02, img03, img04, img05, img06 ]

/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const createLetterButtons = () => {
  // let lettersToCreate = /A-Z/;
  let lettersToCreate = ["A", "B", "C", "D", "E", "F",
      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
      "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  for (let loopCounter = 0; loopCounter <= lettersToCreate.length - 1; loopCounter++){
    document.getElementById("letter-buttons").innerHTML +=
        ("<input type='button' name='" + lettersToCreate[loopCounter] +
         "' id='letter" + lettersToCreate[loopCounter] +
         "' value='" + lettersToCreate[loopCounter] +
         "' accessKey='" + lettersToCreate[loopCounter] +
         "' class='letter-button btn" + 
         "' onclick='letterButtonClick(this.value)' />")
  }
  // let buttonsToCreate = lettersToCreate.map(item => {
  //     <button>item</button>
  // })
  // console.log(buttonsToCreate);
  // return buttonsToCreate// console.log(lettersToCreate);
};
createLetterButtons();

// TODO: do api call to load a set of words for the level
// use a temporary array of words
/* -----------------------------------------
  function getWordsForList()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const getWordList = () => {
  console.log('get words for list');
  // array of words
	let arrOfWords = [ "Apples", "Beta", "Catch", "Data", "Eval", "Fox",
  "Google", "Happy", "INXS", "JavaScript", "Kingpin", "List", "Max", "Nope",
  "Orange", "Purple", "Queen", "Really", "Script", "Try", "Unicorn", "Venus",
  "Wrox", "XML", "Yesterday", "Zebra" ];
}


// TODO: create the word boxes
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */

// TODO: select a word from the list
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const selectWordFromList = () => {
  console.log('selecting a word')
}

// TODO: load the word into the word boxes
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const setSelectedWordForGuess = () => {
  console.log('setting the selected word to guess')
}

/* -----------------------------------------
  function beginGame()
  purpose: start the game selects a word, resets form elements and variables.
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
let strSelectedWord = ""; //selected word to guess
let intIncorrectGuesses = 0; //number of incorrect guesses
let intNumberOfGuesses = 0; //number of guesses
let intLetterFound = 0; //letter found
let intNumberOfLost = 0; //number of lost games
let intNumberOfWins = 0; //number of wins

const beginGame = () => {
  // get words
  getWordList()
  // select word
  selectWordFromList()
  // set word to guess
  setSelectedWordForGuess()
  //set variables to 0
	intNumberOfLost = 0;
	intNumberOfWins = 0;

	//reset html form elements
	document.getElementById('player-wins').value = "";
	document.getElementById('player-losses').value = "";
	// document.forms[0].losTotalTxt.value = "";

	// set image to start image
	document.getElementById('img-Hangman').src = imgStart.src;

	return true;
}
beginGame();


// TODO: letter button clicked check to see
// if the selected letter is in the word
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const letterButtonClick = (letterClicked) => {
  intNumberOfGuesses++;
  document.getElementById('guess-total').value = intNumberOfGuesses;

  console.log(letterClicked);
}

// TODO: check to see if the word has been guessed
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */

// TODO: record the win or loss and set the level
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */

// TODO: restart the game
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */

// TODO: select a different word and record the skipped attempt
/* -----------------------------------------
  function createLetterButtons()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */

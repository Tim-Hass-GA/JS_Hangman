console.log('js is here');

// game vars
let strSelectedWord = ""; //selected word to guess
let intIncorrectGuesses = 0; //number of incorrect guesses
let intNumberOfGuesses = 0; //number of guesses
let intLetterFound = 0; //letter found
let intNumberOfLost = 0; //number of lost games
let intNumberOfWins = 0; //number of wins

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
const gallowsImages = [ imgStart, img01, img02, img03, img04, img05, img06 ];

/* function createLetterButtons()
-----------------------------------------
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const createLetterButtons = () => {
  // let lettersToCreate = /A-Z/;
  let lettersToCreate = ["A", "B", "C", "D", "E", "F",
      "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
      "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  for (let loopCounter = 0; loopCounter <= lettersToCreate.length - 1; loopCounter++){
    document.getElementById("letter-buttons").innerHTML +=
        ( "<input type='button' name='" + lettersToCreate[loopCounter] +
          "' id='letter" + lettersToCreate[loopCounter] +
          "' value='" + lettersToCreate[loopCounter] +
          "' accessKey='" + lettersToCreate[loopCounter] +
          "' class='letter-button btn" +
          "' onclick='letterButtonClick(this.value)' />" );
  }
  // let buttonsToCreate = lettersToCreate.map(item => {
  //     <button>item</button>
  // })
  // console.log(buttonsToCreate);
  // return buttonsToCreate// console.log(lettersToCreate);
};

//////call to create letter buttons....
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
}

/* function createWordBoxes()
-----------------------------------------
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const createWordBoxes = (word) => {
  console.log(word);
  //create the text boxes for the word
  for (let intLoopCounter = 0; intLoopCounter < word.length; intLoopCounter++)
  {
   document.getElementById("word-boxes").innerHTML +=
			( "<input type='text' class='word-letter' name='" + word[intLoopCounter] +
				"' id='wordBox" + intLoopCounter +
			  "' value='?' size='1' maxlength='1' readonly='readonly' />" );
  }
}

// TODO: selectWordFromList()
/* -----------------------------------------
  function selectWordFromList()
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
----------------------------------------- */
const selectWordFromList = () => {
  console.log('selecting a word');

  //reset the wordBoxes
	document.getElementById("word-boxes").innerHTML = "";

  const arrOfWords = [ "Apples", "Beta", "Catch", "Data", "Eval", "Fox",
  "Google", "Happy", "INXS", "JavaScript", "Kingpin", "List", "Max", "Nope",
  "Orange", "Purple", "Queen", "Really", "Script", "Try", "Unicorn", "Venus",
  "Wrox", "XML", "Yesterday", "Zebra" ];
  //select a random word from the array
  intSelectedIndex = (Math.floor(Math.random() * arrOfWords.length) + 1);
  strSelectedWord = arrOfWords[intSelectedIndex];

  //transfrom the value to uppercase
  strSelectedWord = strSelectedWord.toUpperCase();
  // set word to guess
  createWordBoxes(strSelectedWord);

}

/* function beginGame()
-----------------------------------------
  purpose: start the game selects a word, resets form elements and variables.
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const beginGame = () => {
  // get words
  getWordList()
  // select word
  selectWordFromList()

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

/////// call to begin game......
beginGame();

/* TODO: function disableLetterButtons()
-----------------------------------------
// remove the click-ability of all active buttons in play
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const disableLetterButtons = () => {
  console.log('disableLetterButtons called')
  let arrActiveButtons = document.getElementById("letter-buttons");
  console.log(arrActiveButtons)

  // for (let i in arrActiveButtons){
  // // for (let i = 0; i < arrActiveButtons.length; i++ ){
  //   console.log('inside for loop'+i)
  //
  //   // arrActiveButtons.elements[i].disabled = true;
  // }
}

/* TODO: function changeImage()
-----------------------------------------
// change the image of the gallows
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const changeImage = () => {
  let currentImg = document.getElementById('img-Hangman').src;
  console.log(currentImg)
  if (currentImg == null){
  // if (document.getElementById('img-Hangman').src != null){
    currentImg = gallowsImages[0];
  } else {
    currentImg = gallowsImages[intIncorrectGuesses];
  }
}

/* TODO: function checkMatches = (letterClicked)
-----------------------------------------
// check to see if the word has been guessed
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const checkMatches = (letterClicked) => {
  console.log('checking for match with ' + letterClicked);
  let testRegExp = new RegExp(letterClicked, 'gi');
  let myTestStr = strSelectedWord;
  let matchArray = myTestStr.match(testRegExp);

  if (matchArray != null){
    for (let i = 0; i < myTestStr.length; i++){
      if (myTestStr[i] == letterClicked){
        document.getElementById("wordBox" + i).value = letterClicked;
      }
    }
    for (let i = 0; i < matchArray.length; i++){
      intLetterFound++;
      if (intLetterFound === myTestStr.length){
        intNumberOfWins++;
        document.getElementById("player-wins").value = intNumberOfWins;
        console.log('You Win');
        disableLetterButtons();
      }
    }
  } else {
    intIncorrectGuesses++;
    changeImage();
    if (intIncorrectGuesses == 6){
      intNumberOfLost++;
      document.getElementById("player-losses").value = intNumberOfLost;
      console.log('....sorry you lost....');
      disableLetterButtons();
    }
  }
}


/* TODO: function letterButtonClick = (letterClicked)
-----------------------------------------
// letter button clicked check to see
// if the selected letter is in the word
  purpose: respond to letter button click
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/
const letterButtonClick = (letterClicked) => {
  console.log(letterClicked);
  intNumberOfGuesses++;
  document.getElementById('guess-total').value = intNumberOfGuesses;
  document.getElementById('letter'+letterClicked).disabled = true;
  document.getElementById('guess-display').value += letterClicked;
  checkMatches(letterClicked);
}

/* TODO: function recordWinLoss()
-----------------------------------------
// record the win or loss
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/

/* TODO: function restartGame()
-----------------------------------------
// restart the game
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/

/* TODO: function apiGetWords()
-----------------------------------------
// select a different word and record the skipped attempt
  purpose: create the letter buttons
  author: Tim Hass
  date: 07/17/18
  parameters: none
  return: true
  additional notes:
-----------------------------------------
*/

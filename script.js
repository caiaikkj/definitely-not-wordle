console.log('keypress');

const lettersPattern = /[a-zA-Z;]/; // /^[A-Za-z][A-Za-z0-9]*$/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
// let currentLetters = currentGuess.dataset.letters;

// detect keypress (letter, backspace, other)
document.addEventListener('keydown', (e) => {
    console.log('keypress: ' + e.key);

    // if keypress is a string oh length 1, and a letter
    
    let keypress = e.key;
    if (keypress.length == 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5){
        // console.log('is letter');
        updateLetters(keypress);
    }
    else if(e.key == 'Backspace' && currentGuess.dataset.letters != '') {
        console.log('is backspace');
        deleteFromLetters();
    }
});


// update "letters"
const updateLetters = (letter) => {

    // console.log(
        // 'updateLetters = ' + letter,
        // '\ncurrentGuessCount = ' + currentGuessCount,
        // '\ncurrentLetter = ' + currentGuess.dataset.letters
    // );
    // console.log('updated currentLetters = ' + currentGuess.dataset.letters);

    let oldLetters = currentGuess.dataset.letters;
    let newLetters = oldLetters + letter;
    let currentTile = newLetters.length;
    currentGuess.dataset.letters = newLetters;
    console.log('currentTile = ' + currentTile);
    updateTiles(currentTile, letter);
    
};
// update tiles markup
const updateTiles = (tileNumber, letter) => {
    console.log('updateTiles(' + tileNumber, letter + ')')
    let currentTile = document.querySelector('#guessTile' + tileNumber);
    currentTile.innerText = letter;
};


// backspace -- delete last letter
const deleteFromLetters = () => {
    // delete last letter from letters attribute
    let oldLetters = currentGuess.dataset.letters;
    console.log('oldLetters = ' + oldLetters);
    let newLetters = oldLetters.slice(0, -1);
    console.log('newLetters = ' + newLetters);
    currentGuess.dataset.letters = newLetters;
    deleteFromTiles(oldLetters.length);
}

// backspace -- delete tile markup
const deleteFromTiles = (tileNumber) => {
    // remove markup from last tile
    console.log('deleteFromTiles = ' + tileNumber);
    document.querySelector('#guessTile' + tileNumber).innerText = "";
}
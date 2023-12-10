// console.log('keypress');

const lettersPattern = /[a-zA-Z;]/; // /^[A-Za-z][A-Za-z0-9]*$/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
let words = [
    'which',
    'there',
    'their',
    'about',
    'would',
    'these',
    'other',
    'words',
    'could',
    'write',
    'first',
    'water',
    'after',
    'where',
    'right',
    'think',
    'three',
    'years',
    'place',
    'sound',
];
let solutionWord = "";

const chooseWord = () => {
    // words = words.sort(() => Math.random() - 0.5);
    //console.log('Words = ' + words);
    let randomItem = Math.floor(Math.random() * (words.length - 1));
    solutionWord = words[randomItem];
};

chooseWord();
// console.log('solutionWord = ' + solutionWord);

// let currentLetters = currentGuess.dataset.letters;

// detect keypress (letter, backspace, enter, other)
document.addEventListener('keydown', (e) => {
    // console.log('keypress: ' + e.key);
    
    let keypress = e.key;
    if (keypress.length == 1 && lettersPattern.test(e.key) && currentGuess.dataset.letters.length < 5){
        // console.log('is letter');
        updateLetters(keypress);
    }
    else if(e.key == 'Backspace' && currentGuess.dataset.letters != '') {
        // console.log('is backspace');
        deleteFromLetters();
    }
    else if(e.key == 'Enter' && currentGuess.dataset.letters.length == 5) {
        submitGuess();
    }
});

const submitGuess = () => {
    // console.log('submit guess');
    for (let i = 0; i < 5; i++){
        setTimeout(() =>{
            revealTile(i, checkLetter(i));
        }, i * 150);
        
    }
};

const checkIfGuessComplete = (i) => {
    if (i == 4) {
        checkWin();
    }
};

const jumpTiles = () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            let currentTile = document.querySelector('#guess' + currentGuessCount + 'Tile' + (i + 1));
            currentTile.classList.add('jump');
        }, i * 150)
    }
}

const checkWin = () => {
    if(solutionWord == currentGuess.dataset.letters){
        // win
        // console.log('game is won!');
        setTimeout(() => {
            jumpTiles();
        }, 500);
        
    }
    else {
        // lose
        currentGuessCount = currentGuessCount + 1;
        currentGuess = document.querySelector('#guess' + currentGuessCount);
        if (currentGuessCount == 7) {
            setTimeout(() => {
                showSolution();
            }, 500);
        }
    }
};

const showSolution = () => {
    alert('Better luck next time. The solution was: ' + solutionWord);
}

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
    // console.log('currentTile = ' + currentTile);
    updateTiles(currentTile, letter);
    
};

const updateTiles = (tileNumber, letter) => {
    // console.log('updateTiles(' + tileNumber, letter + ')');
    let currentTile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNumber);
    currentTile.innerText = letter;
    currentTile.classList.add('has-letter');
};


// backspace -- delete last letter
const deleteFromLetters = () => {
    // delete last letter from letters attribute

    let oldLetters = currentGuess.dataset.letters;
    // console.log('oldLetters = ' + oldLetters);
    let newLetters = oldLetters.slice(0, -1);
    // console.log('newLetters = ' + newLetters);
    currentGuess.dataset.letters = newLetters;
    deleteFromTiles(oldLetters.length);
}

// backspace -- delete tile markup
const deleteFromTiles = (tileNumber) => {
    
    // console.log('deleteFromTiles = ' + tileNumber);
    let currentTile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNumber)
    currentTile.innerText = "";
    currentTile.classList.remove('has-letter');
}

const checkLetter = (position) => {
    // console.log(position);
    let guessedLetter = currentGuess.dataset.letters.charAt(position);
    let solutionLetter = solutionWord.charAt(position);
    // console.log(guessedLetter, solutionLetter);

    if(guessedLetter == solutionLetter){
        // console.log('correct');
        return 'correct';
    }

    else {
        return checkLetterExists(guessedLetter) ? 'present' : 'absent';
    }

};

const checkLetterExists = (letter) => {
    return solutionWord.includes(letter);
};

const revealTile = (i, state) => {
    let tileNumber = i + 1;
    flipTile(tileNumber, state);
    checkIfGuessComplete(i);
};

const flipTile = (tileNumber, state) => {
    let tile = document.querySelector('#guess' + currentGuessCount + 'Tile' + tileNumber);
    tile.classList.add('flip-in');
    setTimeout(() => {
        tile.classList.add(state);
    }, 250);
    setTimeout(() => {
        tile.classList.remove('flip-in');    
        tile.classList.add('flip-out');
    }, 300)
    

}
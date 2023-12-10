// console.log('keypress');

const colorThemes = document.querySelectorAll('[name="theme"');

// store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme)
};
const retrieveTheme = function() {
    const activeTheme = localStorage.setItem("theme", theme);
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})
// apply theme

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
    'great',
    'again',
    'still',
    'every',
    'small',
    'found',
    'those',
    'never',
    'under',
    'might',
    'while',
    'house',
    'world',
    'below',
    'asked',
    'going',
    'large',
    'until',
    'along',
    'shall',
    'being',
    'often',
    'earth',
    'began',
    'since',
    'study',
    'night',
    'light',
    'above',
    'paper',
    'parts',
    'young',
    'story',
    'point',
    'times',
    'heard',
    'whole',
    'white',
    'given',
    'means',
    'music',
    'miles',
    'thing',
    'today',
    'later',
    'using',
    'money',
    'lines',
    'order',
    'group',
    'among',
    'learn',
    'known',
    'space',
    'table',
    'early',
    'trees',
    'short',
    'hands',
    'state',
    'black',
    'shown',
    'stood',
    'front',
    'voice',
    'kinds',
    'makes',
    'comes',
    'close',
    'power',
    'lived',
    'vowel',
    'taken',
    'built',
    'heart',
    'ready',
    'quite',
    'class',
    'bring',
    'round',
    'horse',
    'shows',
    'piece',
    'green',
    'stand',
    'birds',
    'start',
    'river',
    'tried',
    'least',
    'field',
    'whose',
    'girls',
    'leave',
    'added',
    'color',
    'third',
    'hours',
    'moved',
    'plant',
    'doing',
    'names',
    'forms',
    'heavy',
    'ideas',
    'cried',
    'check',
    'floor',
    'begin',
    'woman',
    'alone',
    'plane',
    'spell',
    'watch',
    'carry',
    'wrote',
    'clear',
    'named',
    'books',
    'child',
    'glass',
    'human',
    'takes',
    'party',
    'build',
    'seems',
    'blood',
    'sides',
    'seven',
    'mouth',
    'solve',
    'north',
    'value',
    'death',
    'maybe',
    'happy',
    'tells',
    'gives',
    'looks',
    'shape',
    'lives',
    'steps',
    'areas',
    'sense',
    'speak',
    'force',
    'ocean',
    'speed',
    'women',
    'metal',
    'south',
    'grass',
    'scale',
    'cells',
    'lower',
    'sleep',
    'wrong',
    'pages',
    'ships',
    'needs',
    'rocks',
    'eight',
    'major',
    'level',
    'total',
    'ahead',
    'reach',
    'stars',
    'store',
    'sight',
    'terms',
    'catch',
    'works',
    'board',
    'cover',
    'songs',
    'equal',
    'stone',
    'waves',
    'guess',
    'dance',
    'spoke',
    'break',
    'cause',
    'radio',
    'weeks',
    'lands',
    'basic',
    'liked',
    'trade',
    'fresh',
    'final',
    'fight',
    'meant',
    'drive',
    'spent',
    'local',
    'waxes',
    'knows',
    'train',
    'bread',
    'homes',
    'teeth',
    'coast',
    'thick',
    'brown',
    'clean',
    'quiet',
    'sugar',
    'facts',
    'steel',
    'forth',
    'rules',
    'notes',
    'units',
    'peace',
    'month',
    'verbs',
    'seeds',
    'helps',
    'sharp',
    'visit',
    'woods',
    'chief',
    'walls',
    'cross',
    'wings',
    'grown',
    'cases',
    'foods',
    'crops',
    'fruit',
    'stick',
    'wants',
    'stage',
    'sheep',
    'nouns',
    'plain',
    'drink',
    'bones',
    'apart',
    'turns',
    'moves',
    'touch',
    'angle',
    'based',
    'range',
    'marks',
    'tired',
    'older',
    'farms',
    'spend',
    'shoes',
    'goods',
    'chair',
    'twice',
    'cents',
    'empty',
    'alike',
    'style',
    'broke',
    'pairs',
    'count',
    'enjoy',
    'score',
    'shore',
    'roots',
    'paint',
    'heads',
    'shook',
    'serve',
    'angry',
    'crowd',
    'wheel',
    'quick',
    'dress',
    'share',
    'alive',
    'noise',
    'solid',
    'cloth',
    'signs',
    'hills',
    'types',
    'drawn',
    'worth',
    'truck',
    'piano',
    'upper',
    'loved',
    'usual',
    'faces',
    'drove',
    'cabin',
    'boats',
    'towns',
    'proud',
    'court',
    'model',
    'prime',
    'fifty',
    'plans',
    'yards',
    'prove',
    'tools',
    'price',
    'sheet',
    'smell',
    'boxes',
    'raise',
    'match',
    'truth',
    'roads',
    'threw',
    'enemy',
    'lunch',
    'chart',
    'scene',
    'graph',
    'doubt',
    'guide',
    'winds',
    'block',
    'grain',
    'smoke',
    'mixed',
    'games',
    'wagon',
    'sweet',
    'topic',
    'extra',
    'plate',
    'title',
    'knife',
    'fence',
    'falls',
    'cloud',
    'wheat',
    'plays',
    'enter',
    'broad',
    'steam',
    'atoms',
    'press',
    'lying',
    'basis',
    'clock',
    'taste',
    'grows',
    'thank',
    'storm',
    'agree',
    'brain',
    'track',
    'smile',
    'funny',
    'beach',
    'stock',
    'hurry',
    'saved',
    'sorry',
    'giant',
    'trail',
    'offer',
    'ought',
    'rough',
    'daily',
    'avoid',
    'keeps',
    'throw',
    'allow',
    'cream',
    'laugh',
    'edges',
    'teach',
    'frame',
    'bells',
    'dream',
    'magic',
    'occur',
    'ended',
    'chord',
    'false',
    'skill',
    'holes',
    'dozen',
    'brave',
    'apple',
    'climb',
    'outer',
    'pitch',
    'ruler',
    'holds',
    'fixed',
    'costs',
    'calls',
    'blank',
    'staff',
    'labor',
    'eaten',
    'youth',
    'tones',
    'honor',
    'globe',
    'gases',
    'doors',
    'poles',
    'loose',
    'apply',
    'tears',
    'exact',
    'brush',
    'chest',
    'layer',
    'whale',
    'minor',
    'faith',
    'tests',
    'judge',
    'items',
    'worry',
    'waste',
    'hoped',
    'strip',
    'begun',
    'aside',
    'lakes',
    'bound',
    'depth',
    'candy',
    'event',
    'worse',
    'aware',
    'shell',
    'rooms',
    'ranch',
    'image',
    'snake',
    'aloud',
    'dried',
    'likes',
    'motor',
    'pound',
    'knees',
    'refer',
    'fully',
    'chain',
    'shirt',
    'flour',
    'drops',
    'spite',
    'orbit',
    'banks',
    'shoot',
    'curve',
    'tribe',
    'tight',
    'blind',
    'slept',
    'shade',
    'claim',
    'flies',
    'theme',
    'queen',
    'fifth',
    'union',
    'hence',
    'straw',
    'entry',
    'issue',
    'birth',
    'feels',
    'anger',
    'brief',
    'rhyme',
    'glory',
    'guard',
    'flows',
    'flesh',
];
let solutionWord = "";

const chooseWord = () => {
    // words = words.sort(() => Math.random() - 0.5);
    //console.log('Words = ' + words);
    let randomItem = Math.floor(Math.random() * (words.length - 1));
    solutionWord = words[randomItem];
};

chooseWord();
console.log('solutionWord = ' + solutionWord);

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

////////////

//function handleKeyPress(key) {
//    // You can perform actions based on the pressed key
//    console.log("Pressed key: " + key);
//    var outputContainer = document.querySelector('#guess' + 1 + 'Tile' + 1);
//    outputContainer.textContent += key;
//    // Example: Output the pressed key to an input field
//    // document.getElementById('output').value += key;
//}
//
//document.addEventListener('DOMContentLoaded', function () {
//    // Select all elements with class "keyboard-button"
//    var buttons = document.querySelectorAll('.keyboard-button');
//
//    // Add a click event listener to each button
//    buttons.forEach(function (button) {
//        button.addEventListener('click', function () {
//            // Call the handleKeyPress function with the button's inner text
//            handleKeyPress(button.innerText);
//        });
//    });
//
//    // Add a keydown event listener to the document
//    document.addEventListener('keydown', function (event) {
//        // Call the handleKeyPress function with the pressed key
//        handleKeyPress(event.key);
//    });
//});

//////////

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
        setTimeout(() => {
            congrats();
        }, 1500);
        
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

const congrats = () => {
    alert('You got it!')
}
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
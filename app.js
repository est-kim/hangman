// Create buttons for letters 
// 1. Make a word bank 

const wordBank = ['Spongebob', 'Patrick', 'Naruto', 'Sasuke', 'Squidward', 'Sakura']

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
const underscores = document.getElementById('underscores')
const message = document.getElementById('message')
const letterButtons = document.getElementById('letterButtons')
const replayButton = document.getElementById('replayButton')
const count = document.getElementById('count')

let wordState;
let lastIndex;
let myWord;
let gameRunning = true
let winCount = 1

const newGame = () => {
    //start a new game, pick new word from word bank, new array with underscores. 
    replayButton.style.visibility = "hidden"
    //randomIndex is a random integer from 0 to wordBank.length
    let randomIndex = Math.floor(Math.random() * wordBank.length);
    while (randomIndex == lastIndex) {
        randomIndex = Math.floor(Math.random() * wordBank.length);
    }
    lastIndex = randomIndex
    // 2. Choose a random word from bank,create X underscores where X is length of word
    myWord = wordBank[randomIndex].toLowerCase() //don't add let, because we are REDEFINING the value
    wordState = new Array(myWord.length).fill('_')
    underscores.textContent = wordState.join(' ')
    gameRunning = true
}
newGame()



//need a string that keeps track of the state of the game 

// let wordState = ""
// for (let i = 0; i < myWord.length; i++) {
//     wordState += "_ "
// }

// if targetGuess matches letter in myWord, replace the respective 
//  _ in position of the word in the array 

// underscores.textContent = wordState.join(' ')

// replayButton.style.visibility = "hidden" //or it can be set to "visible"
// replayButton is holding an HTML element. There are many METHODS (aka functions) that live in HTML elements.
// replayButton.classList.add("orangeJuice")
// console.log(replayButton.id)
// replayButton.textContent = replayButton.textContent.toUpperCase()
// replayButton.style.color = "blue"
// replayButton.style.display = "none" //or it can be "inline" or "block" or "inline-block" or "flex"

const buttonClick = (event) =>{
    if (gameRunning) {        
        console.log(event) //telling you about the event object if you want know
        console.log(event.target.textContent) 
        // if ( event.target.textContent exists in the word... ) {
        const targetGuess = event.target.textContent
        
        if ( myWord.includes(targetGuess) ) {
            // let rightLetter = myWord.includes(targetGuess)
            for (let i = 0; i < myWord.length; i++) {
                if (myWord[i] === targetGuess) {
                    wordState[i] = targetGuess
                } 
            }
        underscores.textContent = wordState.join(' ') // this updates what's on the page 
            if ( !wordState.includes('_') ) {
                message.textContent = `Yay, you're done!` 
                gameRunning = false
                replayButton.style.visibility = "visible"
                replayButton.addEventListener('click', newGame)
            } else {
                message.textContent = `Good job! You guessed a correct letter.`
            }
        } else {
            message.textContent = `Sorry, you guessed the wrong letter. Try again!`
        } 
    }    
} 

count.textContent = 'Count:'

// function NewCW(letter) {
//     let count = 0;
//     winCount -= 1

//     while (count <= myWord.length - 1) {
//         if (letter === myWord[count]) {
//             if(wordGuess[count] === letter) {
//             }
//             else {
//             }

//             wordGuess[count] = letter;
//             count += 1;
//         }

//         else {
//             count += 1;
//         }

//     }

// }

for (let i = 0; i < alphabet.length; i++) {
    const button = document.createElement('button')
    button.innerText = alphabet[i]
    button.addEventListener("click", buttonClick)
    letterButtons.appendChild(button)
}

// const replayButton = document.createElement('button')

// replay = replayButton.addEventListener('click', buttonClick)
// replayButton.innerText = 'Play Again'

//add a count button 
//add a replay button

const runFizzBuzz = () => {
    let solution = [];
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            solution.push('FizzBuzz')
        } else if (i % 3 == 0) {
            solution.push('Fizz')
        } else if (i % 5 == 0) {
            solution.push('Buzz')
        } else {
            solution.push(i)
        }
    }
    return solution
} 
console.log( runFizzBuzz() )
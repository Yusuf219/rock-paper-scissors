function getComputerChoice() {
    compMove = Math.floor(Math.random() * 3) // 0 Rock, 1 Paper, 2 Scissors (0 to 2)
    let moveList = ["Rock", "Paper", "Scissors"]
    moveOutput = `The computer's move was ${moveList[compMove]}.\n\n`;
    return compMove
}

function playerSelection(yourMove) {
    if (counter >= 5) {
        console.log(finalResult)
        if (finalResult === 'win') {
            gameOver.textContent = 'You already won, stop that!'
        }
        else if (finalResult === 'lose') {
            gameOver.textContent = 'Stop right there, loser!'
        }
        else {
            gameOver.textContent = 'It was a draw?!'
        }
    } else {
        getComputerChoice()
        playRound(yourMove, compMove)
        console.log(`${yourWins} - ${compWins} - ${draws} ${counter}`)

        if (yourWins > compWins) {
            finalScore.textContent = `You win!`
            finalResult = 'win'
        } else if (yourWins < compWins) {
            finalScore.textContent = `You lose!`
            finalResult = 'lose'
        } else {
            finalScore.textContent = `It's a draw!`
            finalResult = 'draw'
    }}}

function playRound (player, comp) {
    let x = player;
    let y = comp;
    let text;
    let result = "lose";
    if (player === "rock") { // Rock
        switch (y) {
            case 0: // Rock
                text = "It's a draw! Both rocks clash.";
                result = "draw";
                break
            case 1: // Paper
                text = "You lose! The paper engulfs the rock.";
                break
            case 2: // Scissors
                text = "You win! The rock smashes the scissors.";
                result = "win";
                break
            default: // For debugging purposes
                text = "Something unexpected occurred."
        }
    } else if (player === "paper") { // Paper
        switch (y) {
            case 0: // Rock
                text = "You win! The paper engulfs the rock.";
                result = "win";
                break
            case 1: // Paper
                text = "It's a draw! Both papers hug.";
                result = "draw";
                break
            case 2: // Scissors
                text = "You lose! The scissors cut the paper.";
                break
            default: // For debugging purposes
                text = "Something unexpected occurred."
        }
    } else { // Scissors (player can only equal 2, if prior checks successful)
        switch (y) {
            case 0: // Rock
                text = "You lose! The rock smashes the scissors.";
                break
            case 1: // Paper
                text = "You win! The scissors cut the paper.";
                result = "win";
                break
            case 2: // Scissors
                text = "It's a draw! Both scissors get close.";
                result = "draw";
                break
            default: // For debugging purposes
                text = "Something unexpected occurred."
        }
    }
    counter += 1;
    if (result === "win") {
        yourWins += 1;
    } else if (result === "lose") {
        compWins += 1;
    } else if (result === "draw") {
        draws += 1;
    } else {
    }
    moveOutput += text
    getScore()
}

function game() {
    if (counter < 5) { // Keep track of rounds played (Best of Five)
        playerSelection()
        getComputerChoice()
        playRound (yourMove, compMove)
        game()
    } else {
        console.log(`${yourWins} - ${compWins} - ${draws}`)
        if (yourWins > compWins) {
            alert(`You win! ${yourWins} - ${compWins} - ${draws}`)
        } else if (yourWins < compWins) {
            alert(`You lose! ${yourWins} - ${compWins} - ${draws}`)
        } else {
            alert(`It's a draw! ${yourWins} - ${compWins} - ${draws}`)
        }
    }
}

let counter = 0;
let yourWins = 0;
let compWins = 0;
let draws = 0;
let moveOutput;
let finalResult
// game()

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playerSelection('rock')
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => {
    playerSelection('paper')
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection('scissors')
})

const gameOver = document.querySelector('#gameOver');
const compResult = document.querySelector('#compMove');
const finalScore = document.querySelector('#finalScore');
const win = document.querySelector('#win'); 
const lose = document.querySelector('#lose');
const draw = document.querySelector('#draw');

function getScore() { 
    if (moveOutput != undefined) {
        compResult.textContent = `${moveOutput}`;
    }
    win.textContent = `Win: ${yourWins}`;
    lose.textContent = `Lose: ${compWins}`;
    draw.textContent = `Draw: ${draws}`;
}
getScore()
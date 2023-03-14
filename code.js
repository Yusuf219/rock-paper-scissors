function getComputerChoice() {
    compMove = Math.floor(Math.random() * 3) // 0 Rock, 1 Paper, 2 Scissors (0 to 2)
    console.log(compMove)
    let moveList = ["Rock", "Paper", "Scissors"]
    alert(`The computer's move was ${moveList[compMove]}.`);
    return compMove
}

function playerSelection() {
    yourMove = prompt("Rock, Paper, or Scissors?");
    yourMove = yourMove.toLowerCase();
    if (yourMove === "rock" || yourMove === "paper" || yourMove === "scissors") {
        console.log("Move accepted.");
        return yourMove
    } else {
        alert("Enter your input properly.");
        playerSelection()
    }}

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
    } else {
    }
    alert(text);
    alert(counter);
}

function game() {
    if (counter < 5) { // Keep track of rounds played (Best of Five)
        playerSelection()
        getComputerChoice()
        playRound (yourMove, compMove)
        game()
        console.log(`${yourWins} - ${compWins}`)
    } else {
        if (yourWins > compWins) {
            alert(`You win! ${yourWins} - ${compWins}`)
        } else if (yourWins < compWins) {
            alert(`You lose! ${yourWins} - ${compWins}`)
        } else {
            alert(`It's a draw! ${yourWins} - ${compWins}`)
        }
    }
}

let counter = 0;
let yourWins = 0;
let compWins = 0;
game()

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

function gameResult (player, comp) {
    let x = player;
    let y = comp;
    if (player === "rock") { // Rock
        switch (y) {
            case 0: // Rock
                text = "It's a draw! Both rocks clash.";
                break
            case 1: // Paper
                text = "You lose! The paper engulfs the rock.";
                break
            case 2: // Scissors
                text = "You win! The rock smashes the scissors.";
                break
            default: // For debugging purposes
                text = "Something unexpected occurred."
        }
    } else if (player === "paper") { // Paper
        switch (y) {
            case 0: // Rock
                text = "You win! The paper engulfs the rock.";
                break
            case 1: // Paper
                text = "It's a draw! Both papers hug.";
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
                break
            case 2: // Scissors
                text = "It's a draw! Both scissors get close.";
                break
            default: // For debugging purposes
                text = "Something unexpected occurred."
        }
    }
    alert(text);
}

playerSelection()
getComputerChoice()
gameResult (yourMove, compMove)


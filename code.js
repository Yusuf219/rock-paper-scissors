function getComputerChoice() {
    compMove = Math.floor(Math.random() * 3)
    console.log(compMove)
    return compMove
}

function playerSelection() {
    yourMove = parseInt(prompt("Enter your move (0 = Rock, 1 = Paper, 2 = Scissors"))
    if (yourMove === 0 || yourMove === 1 || yourMove === 2) {
        alert("Move accepted.");
        return yourMove
    } else {
        alert("Enter your input properly.");
        playerSelection()
    }}

function gameResult (player, comp) {
    let x = player;
    let y = comp;
    if (player === 0) { // Rock
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
    } else if (player === 1) { // Paper
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


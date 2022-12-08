
function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else if (number === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie game!";
    }
    else if (playerSelection === "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
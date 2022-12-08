game();

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
        console.log("Tie game!");
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        return -1;
    }
    else if (playerSelection === "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper");
        return -1;
    }
    else if (playerSelection === "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors");
        return -1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = "RoCk";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}
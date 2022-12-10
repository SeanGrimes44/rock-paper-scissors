//game();
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const scoreDisplay = document.querySelector("#score-display");

let playerScore = 0;
let computerScore = 0;
let playing = true;

rock.addEventListener("click", () => {
    if (playing) {
        playRound("rock", getComputerChoice());
    }
});

paper.addEventListener("click", () => {
    if (playing) {
        playRound("paper", getComputerChoice());
    }
});

scissors.addEventListener("click", () => {
    if (playing) {
        playRound("scissors", getComputerChoice());    
    }
});


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
        display.textContent = "Tie round!";
        //return 0;
    }
    else if (playerSelection === "rock" && computerSelection == "paper") {
        display.textContent = "You lose! Paper beats Rock";
        computerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return -1;
    }
    else if (playerSelection === "rock" && computerSelection == "scissors") {
        display.textContent = "You win! Rock beats Scissors";
        playerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return 1;
    }
    else if (playerSelection === "paper" && computerSelection == "rock") {
        display.textContent = "You Win! Paper beats Rock";
        playerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return 1;
    }
    else if (playerSelection === "paper" && computerSelection == "scissors") {
        display.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return -1;
    }
    else if (playerSelection === "scissors" && computerSelection == "paper") {
        display.textContent = "You Win! Scissors beats Paper";
        playerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return 1;
    }
    else if (playerSelection === "scissors" && computerSelection == "rock") {
        display.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        scoreDisplay.textContent = playerScore + " to " + computerScore;
        //return -1;
    }
    
    if (playerScore === 5) {
        scoreDisplay.textContent = "You win!";
        playing = false;
    }
    else if (computerScore === 5) {
        scoreDisplay.textContent = "The computer wins!";
        playing = false;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("select rock, paper, or scissors");
        while (playerSelection.toLowerCase() !== "rock" && 
        playerSelection.toLowerCase() !== "paper" && 
        playerSelection.toLowerCase() !== "scissors") {
            playerSelection = prompt ("Invalid entry. Please select a rock, paper, or scissors.")
        }
        const computerSelection = getComputerChoice();
        let score = playRound(playerSelection, computerSelection);
        if (score === 1) {
            playerScore++;
        }
        else if (score === -1) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game! Congratulations!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }
    else {
        console.log("Tie game!");
    }
}
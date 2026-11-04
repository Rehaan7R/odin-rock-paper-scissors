let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const scores = document.querySelector("#scores");
const winner = document.querySelector("#winner");

const buttons = document.querySelectorAll("#rock-btn, #paper-btn, #scissors-btn");

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        scores.textContent = `Player ${humanScore} : ${computerScore} Computer`;
        return `You Win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        scores.textContent = `Player ${humanScore} : ${computerScore} Computer`;
        return `You Lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function checkGameOver() {
    if (humanScore === 5) {
        winner.textContent = "You won! Refresh the page to play again.";
        buttons.forEach(button => button.disabled = true);
    } else if (computerScore === 5) {
        winner.textContent = "The computer won! Refresh the page to play again.";
        buttons.forEach(button => button.disabled = true);
    } 
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let playerSelection;

        switch(button.id) {
            case "rock-btn":
                playerSelection = "rock";
                break;
            case "paper-btn":
                playerSelection = "paper";
                break;
            case "scissors-btn":
                playerSelection = "scissors";
                break;
        }

        results.textContent = playRound(playerSelection, getComputerChoice());
        checkGameOver();
    })
})
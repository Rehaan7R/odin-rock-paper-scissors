function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie!"
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}.`;
    }
    
    computerScore++;
    return `You Lose! ${computerChoice} beats ${humanChoice}.`;
}

const buttons = document.querySelectorAll(".play-buttons");
let results = document.querySelector("#results");
let scores = document.querySelector("#scores");
let winner = document.querySelector("#winner");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        results.textContent = playRound(button.textContent, getComputerChoice());
        scores.textContent = `Player - ${humanScore} : ${computerScore} - Computer`;

        if (humanScore === 5) {
            winner.textContent = "You won! Refresh the page to play again.";
            buttons.forEach(button => button.disabled = true);
        } else if (computerScore === 5) {
            winner.textContent = "The computer won! Refresh the page to play again.";
            buttons.forEach(button => button.disabled = true);
        }
    })
});
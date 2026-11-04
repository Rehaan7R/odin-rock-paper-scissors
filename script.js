let humanScore = 0;
let computerScore = 0;

const playerDisplay = document.querySelector("#player-choice");
const computerDisplay = document.querySelector("#computer-choice");
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
    results.classList.remove("highlight-green", "highlight-red")

    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        scores.textContent = `Player ${humanScore} : ${computerScore} Computer`;
        results.classList.add("highlight-green");
        return `You Win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        scores.textContent = `Player ${humanScore} : ${computerScore} Computer`;
        results.classList.add("highlight-red");
        return `You Lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function checkGameOver() {
    if (humanScore === 5) {
        winner.textContent = "You won! Refresh the page to play again.";
        winner.classList.add("highlight-green");
        buttons.forEach(button => button.disabled = true);
    } else if (computerScore === 5) {
        winner.textContent = "The computer won! Refresh the page to play again.";
        winner.classList.add("highlight-red");
        buttons.forEach(button => button.disabled = true);
    } 
}

function getChoiceEmoji (choice) {
    switch(choice) {
        case "rock":
            return "✊";
        case "paper": 
            return "✋";
        case "scissors":
            return "✌️";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice;
        const computerChoice = getComputerChoice();

        switch(button.id) {
            case "rock-btn":
                playerChoice = "rock";
                break;
            case "paper-btn":
                playerChoice = "paper";
                break;
            case "scissors-btn":
                playerChoice = "scissors";
                break;
        }

        playerDisplay.textContent = button.textContent;
        computerDisplay.textContent = getChoiceEmoji(computerChoice);

        results.textContent = playRound(playerChoice, computerChoice);
        checkGameOver();
    })
})
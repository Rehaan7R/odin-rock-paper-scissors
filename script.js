/* Get computer choice

   function getComputerChoice
      set num = random number between 0 and 2
     
      if num = 0
         return rock
      else if num = 1
         return paper
      else
         return scissors
 */
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

/* Get human choice
    
    intialise humanChoice variable

    function getHumanChoice
      set humanChoice = input from prompt
 */

function getHumanChoice() {
    return prompt("Choose Rock, Paper or Scissors");   
}

let humanScore = 0;
let computerScore = 0;

/* Implement round logic

    Function playRound(humanChoice, computerChoice)
      Convert humanChoice and computerChoice to lowercase

      If humanChoice = computerChoice
        print "It's a tie!"
      End if

      // Handle human win scenarios
      If humanChoice is rock and computerChoice is scissors
        Or If humanChoice is paper and ComputerChoice is rock
        Or If humanChoice is scissors and computerChoice is paper
            Increment humanScore
            Print "You Win! (humanChoice) beats (computerChoice)."
      End if
        
      // Handle computer win scenarios
      If computerChoice is rock and humanChoice is scissors
        Or If computerChoice is paper and humanChoice is rock
        Or If humanChoice is scissors and humanChoice is paper
            Increment computerScore
            Print "You Lose! (computerChoice beats (humanChoice)."
        End if
 */

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

    if ((computerChoice === "rock" && humanChoice === "scissors") || 
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            return `You Lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

/* Play full game

   Function playGame
     Loop 5 times
        Get humanSelection
        Get computerSelection
        Call playRound function and pass in humanSelection and computerSelection and display it
      End loop

      Display the final scores
 */

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }

    console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
}

playGame();
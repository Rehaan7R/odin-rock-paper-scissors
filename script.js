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
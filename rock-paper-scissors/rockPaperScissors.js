function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) { 
     return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
        return "scissors";
    }
  }


  function playGame() {

let humanScore = 0;
let computerScore = 0;

 const results = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }
    
    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! You both chose ${humanChoice}`;
    return "Tie"; 
    }
  
    if (
       (humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}
        Score: Human ${humanScore} - Computer ${computerScore}` 
      }
      
      else {
       computerScore++; 
       results.textContent = `You lose! ${computerChoice} beats ${humanChoice}
       Score: Human ${humanScore} - Computer ${computerScore}`
       }


     if (humanScore === 5) {
        results.textContent += " You won the game!";
    }

    if (computerScore === 5) {
        results.textContent += " You lost the game!"
    }
   }
       
       const rockbtn = document.querySelector("#rock");
       const paperbtn = document.querySelector("#paper");
       const scissorsbtn = document.querySelector("#scissors");

       rockbtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
       });

       paperbtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
       });

       scissorsbtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
       });
   
    }

 
       playGame();
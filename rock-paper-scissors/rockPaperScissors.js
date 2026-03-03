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

function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors");

    if (choice === null) {
        return "Cancelled";
    }

    choice = choice.toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return "invalid";
    }    
  }

  function playGame() {

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "invalid") {
        console.log("Invalid choice. Please enter rock, paper or scissors");
        return;
    }

    if (humanChoice === "Cancelled") {
        console.log("Game cancelled");
        return; 
    }

    
   //check tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    return "Tie"; 
    }
    //check human win
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
       (humanChoice === "paper" && computerChoice === "rock") ||
       (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return "Human";
      }

      //otherwise, computer wins    
       console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
       computerScore++;
       return "Computer";
       }
    
    
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
          

       playRound(getHumanChoice(), getComputerChoice());
       playRound(getHumanChoice(), getComputerChoice());
       playRound(getHumanChoice(), getComputerChoice());
       playRound(getHumanChoice(), getComputerChoice());
       playRound(getHumanChoice(), getComputerChoice());

       console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }
       playGame();
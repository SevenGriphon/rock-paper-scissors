function getComputerChoice() {
    let numberChoice = Math.ceil(Math.random()*3);
    let choice;
    switch (numberChoice) {
        case (1):
            choice = "rock";
            break;
        case (2):
            choice = "paper";
            break;
        case (3):
            choice = "scissors";
            break;
    }
    return choice;
}

function getPlayerChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors)");
    return choice.toLowerCase();
}

function capitalizeFirstLetter(string) {
    let firstLetter = string[0].toUpperCase();
    string = firstLetter + string.slice(1);
    return string
}


function playGame() {
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice){ // Tie
            alert("Tie!");
        } else if (
            computerChoice == "rock" && playerChoice == "paper" ||
            computerChoice == "paper" && playerChoice == "scissors" ||
            computerChoice == "scissors" && playerChoice == "rock"
        ) { // Player Wins
            alert(`You Won! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}`);
            playerScore++;
        } else { // Computer Wins
            alert(`You Lost! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(playerChoice)}`);
            computerScore++;
        }
    }
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice())
        console.log(playerScore, computerScore)
    }

    alert(`Game Over! Your Score: ${playerScore}:${computerScore}`)
}

playGame()
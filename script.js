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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){ // Tie
        alert("Tie!");
    } else if (
        playerChoice == "rock" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "scissors" ||
        playerChoice == "scissors" && computerChoice == "rock"
    ) { // Computer Wins
        alert(`You Lost! ${capitalizeFirstLetter(computerChoice)} Beats ${capitalizeFirstLetter(playerChoice)}`);
    } else { // Player Wins
        alert(`You Won! ${capitalizeFirstLetter(playerChoice)} Beats ${capitalizeFirstLetter(computerChoice)}`);
    }
}

let playerScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
playRound(playerChoice, computerChoice)
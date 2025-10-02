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
    let choice = prompt("Enter your choice (rock/paper/scissors)")
    return choice.toLowerCase()
}

let playerScore = 0;
let computerScore = 0;

console.log(getComputerChoice())
console.log(getPlayerChoice())
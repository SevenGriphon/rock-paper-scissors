const playerScoreDiv = document.querySelector(".player-score")
const computerScoreDiv = document.querySelector(".computer-score")
const roundResultDiv = document.querySelector(".round-result")

let playerScore = 0
let computerScore = 0

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

function capitalizeFirstLetter(string) {
    let firstLetter = string[0].toUpperCase();
    string = firstLetter + string.slice(1);
    return string
}

function getRoundResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return "tie"
    } else if (
        computerChoice == "rock" && playerChoice == "paper" ||
        computerChoice == "paper" && playerChoice == "scissors" ||
        computerChoice == "scissors" && playerChoice == "rock"
    ) return "win"
    else return "lose"
}

function playRound(e) {
    let btn = e.target
    let playerChoice = btn.id
    let computerChoice = getComputerChoice()
    let result = getRoundResult(playerChoice, computerChoice)

    if (result == "win") playerScore++
    else if (result == "lose") computerScore++

    displayResults(result, playerChoice, computerChoice)
}

function displayResults(result, playerChoice, computerChoice) {
    playerChoice = capitalizeFirstLetter(playerChoice)
    computerChoice = capitalizeFirstLetter(computerChoice)
    switch (result) {
        case ("win"):
            roundResultDiv.textContent = 
            `You Won! ${playerChoice} beats ${computerChoice}`
            break
        case ("lose"):
            roundResultDiv.textContent = 
                `You Lost! ${computerChoice} beats ${playerChoice}`
            break
        default:
            roundResultDiv.textContent = 
                `Tie! Both chose ${playerChoice}`
    }

    playerScoreDiv.textContent = `Player: ${playerScore}`
    computerScoreDiv.textContent = `Computer: ${computerScore}`
}

const choices = document.querySelectorAll(".choice-container button")
choices.forEach((btn) => {
    btn.addEventListener("click", playRound)
})
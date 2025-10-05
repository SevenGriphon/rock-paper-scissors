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

    let fancyPlayerChoice = capitalizeFirstLetter(playerChoice)
    let fancyComputerChoice = capitalizeFirstLetter(computerChoice)
    switch (result) {
        case ("win"):
            roundResultDiv.textContent = 
            `You Won! ${fancyPlayerChoice} beats ${fancyComputerChoice}`
            playerScore++
            playerScoreDiv.textContent = `Player: ${playerScore}`
            break
        case ("lose"):
            roundResultDiv.textContent = 
                `You Lost! ${fancyComputerChoice} beats ${fancyPlayerChoice}`
            computerScore++
            computerScoreDiv.textContent = `Computer: ${computerScore}`
            break
        default:
            roundResultDiv.textContent = 
                `Tie! Both chose ${fancyPlayerChoice}`
    }
}

const choices = document.querySelectorAll(".choice-container button")
choices.forEach((btn) => {
    btn.addEventListener("click", playRound)
})
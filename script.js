let playerLives = 5
let computerLives = 5
options = ["rock", "paper", "scissors"]

function getComputerSelection() {
    choice = Math.floor(Math.random * 3) //random number between 0 and 2
    console.log(choice)
}

const playerSelection = "rock"
const computerSelection = getComputerSelection()

function playRound (player1, player2) {
    if (playerSelection == "rock" && computerSelection == "rock") return ("It's a tie!")
    if (playerSelection == "rock" && computerSelection == "paper") return ("You win!")
    if (playerSelection == "rock" && computerSelection == "scissors") return ("You Lose!")

    if (playerSelection == "paper" && computerSelection == "rock") return "You win!"
    if (playerSelection == "paper" && computerSelection == "paper") return "It's a tie!"
    if (playerSelection == "paper" && computerSelection == "scissors") return "You Lose!"

    if (playerSelection == "scissors" && computerSelection == "rock") return "You Lose!"
    if (playerSelection == "scissors" && computerSelection == "paper") return "You win!"
    if (playerSelection == "scissors" && computerSelection == "scissors") return "It's a tie!"
}

console.log(playRound(playerSelection, computerSelection))
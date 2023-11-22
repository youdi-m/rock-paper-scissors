let playerLives = 5
let computerLives = 5
options = ["rock", "paper", "scissors"]

function getComputerSelection()
{
    choice = Math.floor(Math.random() * 3) //random number between 0 and 2
    return options[choice]
}

let playerSelection = "rock"
let computerSelection = getComputerSelection()

function playRound (player1, player2) {
    if (playerSelection == computerSelection)
    {
        return "It's a tie!"

    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper"))
        {
            computerLives -= 1
            return ("You: " + playerSelection + " " + "Computer: " + computerSelection + " you Win |" + " You: " + playerLives + " Computer: " + computerLives)
        }
        else if ((playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock"))
        {
            playerLives -= 1
            return ("You: " + playerSelection + " " + "Computer: " + computerSelection + " you Lose |" + " You: " + playerLives + " Computer: " + computerLives)
        }
}

while (playerLives >= 0 || computerLives >= 0)
{
    console.log(playRound(playerSelection, computerSelection))
    computerSelection = getComputerSelection()

    if (playerLives == 0)
    {
        console.log("You lose!")
        break
    } else if (computerLives == 0)
    {
        console.log("You Win!")
        break
    }
}
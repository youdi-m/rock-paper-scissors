let playerLives = 5;
let computerLives = 5;
let playerSelection = '';
let computerSelection = '';

options = ["rock", "paper", "scissors"];

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const result = document.querySelector('#resultContainer');
const winLoseText = document.querySelector('#winLoseText');
const playerLivesText = document.querySelector('#playerLivesText');
const computerLivesText = document.querySelector('#computerLivesText');

function getComputerSelection()
{
    choice = Math.floor(Math.random() * 3); //random number between 0 and 2
    return options[choice];
}

function getPlayerSelection(playerClicked)
{
    playerSelection = playerClicked;
    computerSelection = getComputerSelection();
}

rockButton.addEventListener('click', () => {
    getComputerSelection(options[0]);
});

paperButton.addEventListener('click', () => {
    getComputerSelection(options[1]);
});

scissorsButton.addEventListener('click', () => {
    getComputerSelection(options[2]);
});

function playRound(player1, player2)
{
    if (player1 == player2)
    {
        winLoseText.textContent = 'its a tie!';

    } else if ((player1 == "rock" && player2 == "scissors") || 
        (player1 == "paper" && player2 == "rock") ||
        (player1 == "scissors" && player2 == "paper"))
        {
            computerLives -= 1
            winLoseText.textContent = "You: " + player1 + " " + "Computer: " + player2 + " you Win |" + " You: " + playerLives + " Computer: " + computerLives;
        }
        else if ((player1 == "rock" && player2 == "paper") ||
        (player1 == "paper" && player2 == "scissors") ||
        (player1 == "scissors" && player2 == "rock"))
        {
            playerLives -= 1
            winLoseText.textContent = "You: " + player1 + " " + "Computer: " + player2 + " you Lose |" + " You: " + playerLives + " Computer: " + computerLives;
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
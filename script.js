//declaring variables
let playerLives = 5;
let computerLives = 5;
let playerSelection = '';
let computerSelection = '';

//settings possible options
options = ["rock", "paper", "scissors"];

//linking js to html elements
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const result = document.querySelector("#resultContainer");
const resetButton = document.querySelector(".resetContainer");

const winLoseText = document.querySelector("#winLoseText");
const winnerText = document.querySelector("#winnerText");
const playerLivesText = document.querySelector("#playerLivesText");
const computerLivesText = document.querySelector("#computerLivesText");

//initiating player and computer lives as 5
playerLivesText.textContent = playerLives;
computerLivesText.textContent = computerLives;

//function to choose random option from options array
function getComputerSelection()
{
    choice = Math.floor(Math.random() * 3); //random number between 0 and 2
    return options[choice];
}

//
function getPlayerSelection(playerClicked)
{
    playerSelection = playerClicked;
    computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
}

//event listener for when player presses rock
rockButton.addEventListener('click', () => {
    getPlayerSelection(options[0]);
});

//event listener for when player presses paper
paperButton.addEventListener('click', () => {
    getPlayerSelection(options[1]);
});

//event listener for when player presses scissors
scissorsButton.addEventListener('click', () => {
    getPlayerSelection(options[2]);
});

//event listener for when player presses reset button which will reload the page
resetButton.addEventListener('click', () => {
    location.reload();
});

//function to display winner
function endGame(winner)
{
    if (winner == 'player')
    {
        winnerText.textContent = 'Player Won!';
    }
    else if (winner == 'computer')
    {
        winnerText.textContent = 'Computer Won!';
    }

    //removing event listeners so numbers dont go negative
    rockButton.removeEventListener('click', () => {
        getPlayerSelection(options[0]);
    });

    paperButton.removeEventListener('click', () => {
        getPlayerSelection(options[1]);
    });

    scissorsButton.removeEventListener('click', () => {
        getPlayerSelection(options[2]);
    });
}

//function where choices are compared to see who won the round
function playRound(realPlayer, computerPlayer)
{
    //tie conditions
    if (realPlayer == computerPlayer)
    {
        console.log('tie!');
        winLoseText.textContent = 'Round \n Tied';

    //winning conditions 
    } else if ((realPlayer == "rock" && computerPlayer == "scissors") || 
    (realPlayer == "paper" && computerPlayer == "rock") ||
    (realPlayer == "scissors" && computerPlayer == "paper"))
    {
        computerLives -= 1
        computerLivesText.textContent = computerLives;

        //checking if win condition has been met
        if (computerLives == 0)
        {
            endGame('player');
        }

        winLoseText.textContent = 'Round \n Won';
    }

    //losing conditions
    else if ((realPlayer == "rock" && computerPlayer == "paper") ||
    (realPlayer == "paper" && computerPlayer == "scissors") ||
    (realPlayer == "scissors" && computerPlayer == "rock"))
    {
        playerLives -= 1
        playerLivesText.textContent = playerLives;

        //checking if lose condition has been met
        if (playerLives == 0)
        {
            endGame('computer');
        }

        winLoseText.textContent = 'Round \n Lost';
    }
}
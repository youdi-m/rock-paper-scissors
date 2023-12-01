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

//function to check if game is over
function endGame()
{
    if (computerLives == 0)
    {
        winnerText.textContent = 'Player Wins!';
    }
    else if(playerLives == 0)
    {
        winnerText.textContent = 'Computer Won!'
    }

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

//function where choices are compared to see who won the round
function playRound(realPlayer, computerPlayer)
{
    //tie conditions
    if (realPlayer == computerPlayer)
    {
        winLoseText.textContent = 'Round \n Tied';

    //winning conditions 
    } else if ((realPlayer == "rock" && computerPlayer == "scissors") || 
    (realPlayer == "paper" && computerPlayer == "rock") ||
    (realPlayer == "scissors" && computerPlayer == "paper"))
    {
        computerLives -= 1
        computerLivesText.textContent = computerLives;
        winLoseText.textContent = 'Round \n Won';

        //reset lives to 0 if below 0 CURRENTLY NOT WORKING
        if (computerLives < 0)
        {
            computerLives = 0;
        }

        //calls endgame function if computer is at 0 lives
        if(computerLives == 0)
        {
            endGame();
        }
    }

    //losing conditions
    else if ((realPlayer == "rock" && computerPlayer == "paper") ||
    (realPlayer == "paper" && computerPlayer == "scissors") ||
    (realPlayer == "scissors" && computerPlayer == "rock"))
    {
        playerLives -= 1
        playerLivesText.textContent = playerLives;
        winLoseText.textContent = 'Round \n Lost';
        
        //reset lives to 0 if below 0 CURRENTLY NOT WORKING
        if (playerLives < 0)
        {
            playerLives = 0;
        }

        //calls endgame function if player is at 0 lives
        if(playerLives == 0)
        {
            endGame();
        }
    }
}
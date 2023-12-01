
//declaring variables
let playerLives = 5
let computerLives = 5
let playerSelection = ''
let computerSelection = ''

//settings possible options
options = ["rock" , "paper", "scissors"]

//linking js to html elements
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

//linking text elements
const winLoseText = document.querySelector("#winLoseText")
const playerLivesText = document.querySelector("#playerLivesText")
const computerLivesText = document.querySelector("#computerLivesText")
const playerChoiceIcon = document.querySelector("#playerChoice")
const computerChoiceIcon = document.querySelector("#computerChoice")

//initiating player and computer lives as 5
playerLivesText.textContent = playerLives
computerLivesText.textContent = computerLives

//function to choose random option from options array
function getComputerSelection()
{
    choice = Math.floor(Math.random() * 3) //random number between 0 and 2
    return options[choice]
}

//function to get player selection based on image clicked
function getPlayerSelection(playerClicked)
{
    playerSelection = playerClicked;
    computerSelection = getComputerSelection()
    playRound(playerSelection, computerSelection)
}

//function to check if game is over
function endGame()
{
    if (computerLives == 0)
    {
        winLoseText.textContent = 'Player Wins!'
    }
    else if(playerLives == 0)
    {
        winLoseText.textContent = 'Computer Won!'
    }
}

//event listener for when player presses rock
rockButton.addEventListener('click', () => {
    getPlayerSelection(options[0])
});

//event listener for when player presses paper
paperButton.addEventListener('click', () => {
    getPlayerSelection(options[1])
});

//event listener for when player presses scissors
scissorsButton.addEventListener('click', () => {
    getPlayerSelection(options[2])
});

//function where choices are compared to see who won the round
function playRound(realPlayer, computerPlayer)
{
    //tie conditions
    if (realPlayer == computerPlayer)
    {
        winLoseText.textContent = 'Round \n Tied.'

    //winning conditions 
    } else if ((realPlayer == "rock" && computerPlayer == "scissors") || 
    (realPlayer == "paper" && computerPlayer == "rock") ||
    (realPlayer == "scissors" && computerPlayer == "paper"))
    {
        computerLives -= 1
        computerLivesText.textContent = computerLives
        winLoseText.textContent = 'Round \n Won!'

        //calls endgame function if computer is at 0 lives
        if(computerLives == 0)
        {
            endGame()
        }
    }

    //losing conditions
    else if ((realPlayer == "rock" && computerPlayer == "paper") ||
    (realPlayer == "paper" && computerPlayer == "scissors") ||
    (realPlayer == "scissors" && computerPlayer == "rock"))
    {
        playerLives -= 1
        playerLivesText.textContent = playerLives
        winLoseText.textContent = 'Round \n Lost...'

        //calls endgame function if player is at 0 lives
        if(playerLives == 0)
        {
            endGame()
        }
    }

    setChoiceIcon(playerSelection, computerSelection)
}

function setChoiceIcon(playerSelection, computerSelection)
{
    switch (playerSelection)
    {
        case 'rock':
            playerChoiceIcon.textContent = '✊'
            break
        case 'paper':
            playerChoiceIcon.textContent = '✋'
            break
        case 'scissors':
            playerChoiceIcon.textContent = '✌️'
            break
    }

    switch (computerSelection)
    {
        case 'rock':
            computerChoiceIcon.textContent = '✊'
            break
        case 'paper':
            computerChoiceIcon.textContent = '✋'
            break
        case 'scissors':
            computerChoiceIcon.textContent = '✌️'
            break
    }
}
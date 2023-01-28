
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum]
}

const result = document.querySelector(".result")

function playRound(e){
    const playerSelection = e.currentTarget.dataset.id.toLowerCase();
    const computerSelection = getComputerChoice();
    let winner;
    let desc;

    if(playerSelection === computerSelection){
        winner = "no one"
    }else{
        if(playerSelection === "rock"){
            computerSelection === "paper" ? winner = "computer" : winner = "player"
        }else if(playerSelection === "paper"){
            computerSelection === "scissors" ? winner = "computer" : winner = "player"
        }else if(playerSelection === "scissors")
            computerSelection === "rock" ?  winner = "computer" : winner = "player"
    }

    if(winner === "computer"){
        desc = `Computer win, ${computerSelection} beats ${playerSelection}`
    }else if(winner === "player"){
        desc = `You win, ${playerSelection} beats ${computerSelection}`
    }else if(winner === "no one"){
        desc = `The game ended in a tie, ${playerSelection} and ${computerSelection}`
    }
    result.textContent = desc;
    //display the score
    displayScore(winner);
}

let playerScore = 0;
let computerScore = 0;

function displayScore(winner){
    const playerScoreBox = document.querySelector(".player-score");
    const computerScoreBox = document.querySelector(".computer-score");

    if(winner === "computer"){
        computerScore++;
    }else if(winner === "player"){
        playerScore++;
    }

    playerScoreBox.textContent = playerScore;
    computerScoreBox.textContent = computerScore;

    if(playerScore === 5){
        result.textContent = `The winner is player!`
    }else if(computerScore === 5){
        result.textContent = `The winner is computer!`
    }
    if(playerScore === 5 || computerScore === 5){
        removeEventListener()
    }
    //whenever reach 5scores.. stop it
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", playRound)
})

function removeEventListener(){
    buttons.forEach(btn => {
        btn.removeEventListener("click", playRound)
    })
}
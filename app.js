
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum]
}

const result = document.querySelector(".result")

function playRound(buttonId){
    let playerSelection = buttonId.toLowerCase();
    let computerSelection = getComputerChoice();
    let winner;

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

    result.textContent = `computer: ${computerSelection}  player: ${playerSelection} , winner is ${winner}`
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
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

        let playerInput = prompt("Rock, Siccors, Paper!");
        let computerInput = getComputerChoice()
        result = playRound(playerInput, computerInput);
        if(result === "player"){
            playerScore++;
            console.log(`You win, ${playerInput.toLowerCase()} beats ${computerInput}`)
        }else if(result === "computer"){
            computerScore++;
            console.log(`You lose, ${computerInput} beats ${playerInput.toLowerCase()}`)
        }else{
            console.log(`The game ended in a tie, ${playerInput.toLowerCase()} beats ${computerInput}`)
        }

    if(playerScore > computerScore){
        console.log("@winner is player")
    }else if(playerScore < computerScore){
        console.log("@winner is computer")
    }else{
        console.log("@both are winner!")
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        playRound(e.currentTarget.dataset.id)
    })
})
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum]
}

function playRound(){
    //01.24 code
    //get user input && get computer choice
    let playerSelection = prompt("Rock, Siccors, Paper!");
    playerSelection = playerSelection.toLowerCase();
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
    return winner
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
    btn.addEventListener("click", playRound)
})
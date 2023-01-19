function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    
    switch(randomNum){
        case 0:
            return "rock"
        break;
        case 1:
            return "paper"
        break;
        case 2:
            return "scissors"
        break;
    }
}

function playRound(playerSelection, computerSelection){
    const playerSelectionFormatted = playerSelection.toLowerCase();
    let result;
    let winner;

    if(playerSelectionFormatted === computerSelection){
        winner = "no one"
    }else{
        if(playerSelectionFormatted === "rock"){
            computerSelection === "paper" ? winner = "computer" : winner = "player"
        }else if(playerSelectionFormatted === "paper"){
            computerSelection === "scissors" ? winner = "computer" : winner = "player"
        }else if(playerSelectionFormatted === "scissors")
            computerSelection === "rock" ?  winner = "computer" : winner = "player"
    }
    
    // if(winner === "you"){
    //     result = `You win, ${playerSelectionFormatted} beats ${computerSelection}`
    // }else if(winner === "computer"){
    //     result = `You lose, ${computerSelection} beats ${playerSelectionFormatted}`
    // }else{
    //     result = `The game ended in a tie, ${playerSelectionFormatted} and ${computerSelection}`
    // }

    return winner
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for(let i = 0; i < 5; i++){
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
    }

    if(playerScore > computerScore){
        console.log("@winner is player")
    }else if(playerScore < computerScore){
        console.log("@winner is computer")
    }else{
        console.log("@both are winner!")
    }
}

game()
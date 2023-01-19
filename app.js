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
            computerSelection === "paper" ? winner = "computer" : winner = "you"
        }else if(playerSelectionFormatted === "paper"){
            computerSelection === "scissors" ? winner = "computer" : winner = "you"
        }else if(playerSelectionFormatted === "scissors")
            computerSelection === "rock" ?  winner = "computer" : winner = "you"
    }
    
    if(winner === "you"){
        result = `You win, ${playerSelectionFormatted} beats ${computerSelection}`
    }else if(winner === "computer"){
        result = `You lose, ${computerSelection} beats ${playerSelectionFormatted}`
    }else{
        result = `The game ended in a tie, ${playerSelectionFormatted} and ${computerSelection}`
    }

    return result
}

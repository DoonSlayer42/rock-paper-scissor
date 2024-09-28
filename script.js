// 0->Rock, 1->Paper, 2->Scissor

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissor): ");
    choice = choice.toLowerCase();
    if(choice === "rock") {
        return 0;
    }
    else if(choice === "paper") {
        return 1;
    }
    return 2;
}


function playRound(humanSelection, computerSelection) {
    if(humanSelection === 0) {
        if(computerSelection === 1) {
            computerScore++;
        }
        else if(computerSelection === 2) {
            humanScore++;
        }
    }
    else if(humanSelection === 1) {
        if(computerSelection === 0) {
            humanScore++;
        }
        else if(computerSelection === 2) {
            computerScore++;
        }
    }
    else {
        if(computerSelection === 0) {
            computerScore++;
        }
        else if(computerSelection === 1) {
            humanScore++;
        }
    }
}

for(let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log(humanScore + ' : ' + computerScore);

if(humanScore > computerScore) {
    console.log("You won!");
}
else if(humanScore < computerScore) {
    console.log("Game over!");
}
else {
    console.log("It's a draw!");
}
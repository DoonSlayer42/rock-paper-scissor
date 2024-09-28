// 0->Rock, 1->Paper, 2->Scissor

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function playRound(humanSelection) {
    let computerSelection = getComputerChoice();
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

/* * * * * * *

Adding event listeners

* * * * * * */

const btns = document.querySelectorAll("button");
const scoreBoard = document.querySelector("#score");
console.log(scoreBoard);

btns.forEach((btn) => {
    btn.addEventListener('click', (humanSelection) => {
        for(let i = 1; i <= 3; i++) {
            if(btn.classList.contains(`btn-${i}`)) {
                humanSelection = i - 1;
                break;
            }
        }
        console.log(humanSelection);
        playRound(humanSelection);
        console.log(humanScore + ' : ' + computerScore);
        scoreBoard.textContent = humanScore + ' : ' + computerScore;
    });
});
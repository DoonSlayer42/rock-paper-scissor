// 0->Rock, 1->Paper, 2->Scissor

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissor): ", "rock");
    if(choice === "rock") {
        return 0;
    }
    else if(choice === "paper") {
        return 1;
    }
    return 2;
}

console.log(getHumanChoice());

// let userResponse = prompt("Enter your choice (rock, paper or scissor): ", "rock");
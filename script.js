// let allChoices = ["rock", "paper", "scissors"];

// function getRandom(max) {
//     return Math.floor(Math.random() * max);
// }

// function getComputerChoice() {
//     return allChoices[getRandom(allChoices.length)];
// }

// console.log(getComputerChoice())

let humanChoice;
let computerChoice;


let rock = "rock";
let paper = "paper";
let scissors = "scissors";


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandom(3);

    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Let's play sccissors paper rock! Pick one.");
    humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

const map1 = new Map();

map1.set("paper", "rock");
map1.set("scissors", "paper");
map1.set("rock", "scissors");

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "Draw";
    } else if (map1.get(humanChoice) === computerChoice) {
        humanScore++;
        return "You won!";
    } else {
        computerScore++;
        return "You lost";
    }
}

function playGame() {
    let num = prompt("How many rounds you wanna play?");

    for (let round = 0; round < num; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        // console.log(playRound(humanSelection, computerSelection));
    }

    if (humanScore > computerScore) {
        console.log("You won the game.");
    } else if (computerScore > humanScore) {
        console.log("You lost");
    } else {
        console.log("Its a tie!");
    }


}

playGame();










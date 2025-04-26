const btnAll = document.querySelector(".container");
btnAll.style.maxHeight = "200px";
btnAll.style.minHeight = "50px";
btnAll.style.padding = "10px";
btnAll.style.display = "flex";
btnAll.style.justifyContent = "space-around";


const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnAll.appendChild(btnRock);

const btnSciccors = document.createElement("button");
btnSciccors.textContent = "Scissors";
btnAll.appendChild(btnSciccors);

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnAll.appendChild(btnPaper);

btnAll.addEventListener("click", playRound);




// --------------------------------------------------

let humanChoice;
let computerChoice;


let rock = "rock";
let paper = "paper";
let scissors = "scissors";


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

let humanScore = 0;
let computerScore = 0;

const map1 = new Map();

map1.set("paper", "rock");
map1.set("scissors", "paper");
map1.set("rock", "scissors");

function playRound(e) {
    let number = getRandom(3);
    let computerChoice;

    if (number === 0) {
        computerChoice = "rock";
    } else if (number === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";

    }
    let humanChoice = e.target.textContent.toLowerCase();

    if (computerChoice === humanChoice) {
        alert("Draw");
    } else if (map1.get(humanChoice) === computerChoice) {
        humanScore++;
        alert("You won!");
    } else {
        computerScore++;
        alert("You lost");
    }
    return;
}

function playGame() {
    let num = prompt("How many rounds you wanna play?");

    for (let round = 0; round < num; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game.");
    } else if (computerScore > humanScore) {
        console.log("You lost");
    } else {
        console.log("Its a tie!");
    }

    return `Final score: You ${humanScore} - ${computerScore} Computer`;

}








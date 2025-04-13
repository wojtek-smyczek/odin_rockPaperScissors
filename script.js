// let allChoices = ["rock", "paper", "scissors"];

// function getRandom(max) {
//     return Math.floor(Math.random() * max);
// }

// function getComputerChoice() {
//     return allChoices[getRandom(allChoices.length)];
// }

// console.log(getComputerChoice())


let rock = "rock";
let paper = "paper";
let scissors = "scissors";


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let number = getRandom(3);

    if (number === 1) {
        return rock;
    } else if (number === 2) {
        return paper;
    } else {
        return scissors;
    }

}

console.log(getComputerChoice());




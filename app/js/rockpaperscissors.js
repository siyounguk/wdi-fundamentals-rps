////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return var move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return var move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" ){
        switch(computerMove){
        case "rock":
        winner = "tie";
        break;
        case "paper":
        winner = "computer";
        break;
        case "scissors":
        winner = "player";
        break;
        }
    }else if (playerMove === "paper" ){
        switch(computerMove){
        case "paper":
        winner = "tie";
        break;
        case "scissors":
        winner = "computer";
        break;
        case "rock":
        winner = "player";
        break;
        }
    }else if (playerMove === "scissors" ){
        switch(computerMove){
        case "scissors":
        winner = "tie";
        break;
        case "rock":
        winner = "computer";
        break;
        case "paper":
        winner = "player";
        break;}
    return winner;
}
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


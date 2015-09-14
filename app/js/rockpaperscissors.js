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
var winner;
var playerMove;
var computerMove;

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
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
        break;
        }
    
    }
    return winner;
}

function playToFive() {
  console.log("Let's play Rock Paper Scissors");
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5){


     if (winner ==="player") {
    console.log("Player chose " + playerMove + " while Computer chose "+ computerMove + "." + " Player wins this round!");
        playerWins ++;
    }else if (winner === "computer"){
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove + "." + " Computer wins this round!");
        computerWins ++;
    } else if (winner === "tie") {
        console.log ("Tie. No-one wins this round")
    }
    console.log("The score is currently Player: " + playerWins + " and Computer: " + computerWins + ".")

  }
  return [playerWins, computerWins];
}


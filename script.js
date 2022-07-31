const rockPaperScissors = () => {
    const results = document.querySelector('#results');
    const reset = document.querySelector('#reset');
    const play = document.querySelector('#play');
    const playerScoreNode = document.querySelector('#score__player');
    const computerScoreNode = document.querySelector('#score__computer');
    const playerChoices = [...(document.querySelectorAll('section#choice button'))];

    let counter = 0;
    let computerScore = 0;
    let playerScore = 0;
    let playerChoice;

    playerChoices.forEach(e => e.addEventListener('click', () => {
        playerChoice = e.innerText;
    }));

    const getPlayerChoice = () => playerChoice;

    const getComputerChoice = () => {
        const choices = ['Rock', 'Paper', 'Scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const playRound = (computerSelection, playerChoice) => {

        if(computerSelection === playerChoice) {return results.innerText += ' It\'s a draw';}

        if((computerSelection === 'Rock' && playerChoice === 'Paper') || (computerSelection === 'Paper' && playerChoice === 'Scissors') || (computerSelection === 'Scissors' && playerChoice === 'Rock')) {
            results.innerText += ' You won!';
            playerScore++;
        } else {
            results.innerText += ' Computer won!';
            computerScore++;
        }

        computerScoreNode.innerText = computerScore;
        playerScoreNode.innerText = playerScore;
    };

    const comparing = () => {
        if(counter === 5) {
            results.innerText += `\n\n You've got ${playerScore}, and computer got ${computerScore}.`;
            if(playerScore > computerScore) return results.innerText += ` Congatulations! You won!`;
            if(playerScore < computerScore) return results.innerText += ` Computer won, another time?`;
            if(playerScore = computerScore) return results.innerText += ` Close run, one more game?`;
        }
        return;
    };

    const game = () => {

        let computerSelection = getComputerChoice();
        let playerChoice = getPlayerChoice();

        results.innerText = `Round ${counter}. Your choice is ${playerChoice.toUpperCase()} and computer's choice is ${computerSelection.toUpperCase()}.`;
        playRound(computerSelection, playerChoice);
        comparing();

    };

    play.addEventListener('click', () => {

        if(!playerChoice) return;

        if(counter < 5) {
            counter++;
            game();
        }

    });

    reset.addEventListener('click', () => {
        counter = 0;
        computerScore = 0;
        playerScore = 0;
        results.innerText = '';
        computerScoreNode.innerText = 0;
        playerScoreNode.innerText = 0;
    });
};

rockPaperScissors();

window.onload = () => {
    "use strict";

    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};
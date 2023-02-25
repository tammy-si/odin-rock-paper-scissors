// randomly returns rock, paper, or scissors
function getComputerChoice() {
    const random_num = Math.floor(Math.random() * 3)
    switch (random_num) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")) 
                {
        return "Player";
    } else {
        return "Computer";
    }
}

// keeping count of the scores
var playerScore = 0;
var computerScore = 0;
function game(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();

    const result_display = document.querySelector(".round-results")
    let winner = playRound(playerSelection, computerSelection)
    if (winner == "Tie") {
        result_display.textContent = "Tie"
    } else if (winner == "Player") {
        result_display.textContent = "You win. " + playerSelection + " beats " + computerSelection
        playerScore += 1
    }
    else {
        result_display.textContent = "You lose. " + computerSelection + " beats " + playerSelection
        computerScore += 1
    }
    let player_score_info = document.querySelector('.playerScore')
    let computer_score_info = document.querySelector('.computerScore')
    player_score_info.textContent = "Player Score: " + playerScore;
    computer_score_info.textContent = "Computer Score: " + computerScore;
    const winner_display = document.querySelector('.winner')
    winner_display.textContent = ""
    if (computerScore == 5) {
        winner_display.textContent = "Computer Won!"
    } else if (playerScore == 5) {
        winner_display.textContent = "Player Won!"
    } else {
        return
    }
    playerScore = 0
    computerScore = 0
}
// adding a event listener for all three choices 
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        game(event.target.value);
    })
})

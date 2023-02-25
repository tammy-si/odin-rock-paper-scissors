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

function game(playerChoice) {
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();


    const result_display = document.querySelector(".round-results")
    console.log(result_display)
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
    console.log("Player: " + playerScore + ", Computer Score: " + computerScore)
    // reports winner
    if (playerScore == computerScore) {
        console.log("Tie")
    } else if (playerScore > computerScore) {
        console.log("Player wins")
    } else {
        console.log("Computer wins")
    }
}
// adding a event listener for all three choices 
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        game(event.target.value);
    })
})

game();
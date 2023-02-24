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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Choice: ").toLowerCase()
        let computerSelection = getComputerChoice();

        let winner = playRound(playerSelection, computerSelection)
        if (winner == "Tie") {
            console.log("Tie")
        } else if (winner == "Player") {
            console.log("You win " + playerSelection + " beats " + computerSelection)
            playerScore += 1
        }
        else {
            console.log("You lose " + computerSelection + " beats " + playerSelection)
            computerScore += 1
        }
        console.log("Player: " + playerScore + ", Computer Score: " + computerScore)
    }

    // reports winner
    if (playerScore == computerScore) {
        console.log("Tie")
    } else if (playerScore > computerScore) {
        console.log("Player wins")
    } else {
        console.log("Computer wins")
    }
}

game();
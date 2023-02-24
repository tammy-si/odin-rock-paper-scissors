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

for (let i = 0; i < 5; i++){
    console.log(getComputerChoice())
}

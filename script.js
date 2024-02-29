function playerChoice(choice) {
    const computerChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

    const result = determineWinner(choice, computerChoice);

    document.getElementById('result').textContent = `You chose ${choice}. Computer chose ${computerChoice}. ${result}`;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

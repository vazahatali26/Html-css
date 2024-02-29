// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = 'Please enter a valid number between 1 and 10.';
    } else {
        if (userGuess === secretNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
        } else {
            message.textContent = `Sorry, the correct number was ${secretNumber}. Try again!`;
        }
    }
}

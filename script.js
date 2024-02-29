function mindReader() {
    // Get the selected number from the dropdown
    const selectedNumber = parseInt(document.getElementById('selectedNumber').value);

    // Get the user's input
    const userInput = parseInt(document.getElementById('userInput').value);

    if (isNaN(userInput)) {
        alert('Please enter a valid number for the second input.');
        return;
    }

    // Perform a mathematical operation
    const result = selectedNumber + userInput * 2;

    // Display the result to the user
    document.getElementById('result').textContent = `You were thinking of the number ${result}!`;
}

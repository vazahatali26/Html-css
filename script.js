function mindReader() {
    // Get the selected number from the dropdown
    const selectedNumber = parseInt(document.getElementById('selectedNumber').value);

    // Perform a simple mathematical operation
    const result = selectedNumber * 2 + 8 / 2 - selectedNumber;

    // Display the result to the user
    document.getElementById('result').textContent = `You were thinking of the number ${result}!`;
}

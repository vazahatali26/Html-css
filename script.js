// Function to update progress bar
function updateProgress(subject) {
    const checkbox = document.getElementById(subject);
    const progressBar = document.getElementById(${subject}-progress);

    if (checkbox.checked) {
        progressBar.style.width = '100%';
    } else {
        progressBar.style.width = '0';
    }
}

// You can add more JavaScript functionalities as needed
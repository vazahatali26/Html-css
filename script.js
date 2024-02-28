function submitFeedback() {
    var email = document.getElementById("email").value;
    var views = document.getElementById("views").value;

    // Validate email and views if needed

    // Display feedback on the page
    var displayFeedback = document.getElementById("displayFeedback");
    var feedbackItem = document.createElement("div");
    feedbackItem.innerHTML = <p><strong>Email:</strong> ${email}</p><p><strong>Views:</strong> ${views}</p>;
    displayFeedback.appendChild(feedbackItem);

    // You can also send the feedback to a server for storage or processing
    // Example: You can use AJAX or fetch API to send data to the server
}
const chatContainer = document.getElementById('chat-container');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

async function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display user message in the chat box
    displayMessage('user', userMessage);

    // Fetch response from the Chatbot API
    const botMessage = await getChatbotResponse(userMessage);

    // Display chatbot message in the chat box after a short delay
    setTimeout(() => {
        displayMessage('bot', botMessage);
    }, 500);

    // Clear the user input field
    userInput.value = '';
}

function displayMessage(sender, message) {
    chatBox.innerHTML += `<div class="${sender}-message">${message}</div>`;
    // Scroll to the bottom of the chat box to show the latest message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function getChatbotResponse(userMessage) {
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

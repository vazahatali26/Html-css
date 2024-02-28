function submitOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (name && phone && address) {
        const confirmationMessage = Thank you, ${name}! Your order has been placed. We will deliver to ${address}.;
        document.getElementById('confirmationMessage').textContent = confirmationMessage;

        // You can add further logic here for sending the order details to a server.
    } else {
        alert('Please fill in all the required fields.');
    }
}
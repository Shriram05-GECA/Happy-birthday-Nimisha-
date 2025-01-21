// Get the button and message elements
const button = document.getElementById('surpriseButton');
const message = document.getElementById('message');

// Add a click event listener to the button
button.addEventListener('click', () => {
  message.style.display = 'block'; // Show the message
});

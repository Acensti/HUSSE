/* scripts.js */

// Select all images
const images = document.querySelectorAll('#portfolio img');

// Function to add transition effect
function addTransition() {
    this.style.transform = 'scale(1.1)'; // Enlarge the image
}

// Function to remove transition effect
function removeTransition() {
    this.style.transform = 'scale(1)'; // Return the image to original size
}

// Add event listeners to each image
images.forEach(img => {
    img.addEventListener('mouseover', addTransition);
    img.addEventListener('mouseout', removeTransition);
});

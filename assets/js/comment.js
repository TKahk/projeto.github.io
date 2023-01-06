// Get form and button elements
const form = document.getElementById('comment-form');
const button = document.getElementById('comment-submit-button');

// Add submit event listener to form
form.addEventListener('submit', (event) => {
    // Prevent form submission
    event.preventDefault();

    // Get comment text from textarea
    const text = document.getElementById('comment-textarea').value;

    // Validate comment text
    if (text.trim() === '') {
        // Show error if comment text is empty
        alert('Please enter a comment.');
        return;
    }

    // Get comment template and list elements
    const template = document.getElementById('comment-template');
    const list = document.getElementById('comment-list');

    // Create new comment element from template
    const comment = template.cloneNode(true);
    comment.removeAttribute('id');
    comment.style.display = 'block';

    // Set comment content
    comment.querySelector('.comment-author').textContent = 'Eu';
    comment.querySelector('.comment-date').textContent = new Date().toLocaleDateString();
    comment.querySelector('.comment-text').textContent = text;

    // Add new comment to list
    list.appendChild(comment);

    // Reset form
    form.reset();
});


const resetButton = document.getElementById("reset-button");
const ratingInputs = document.querySelectorAll('input[name="rating"]');

resetButton.addEventListener("click", function () {
    ratingInputs.forEach(input => {
        input.checked = false;
    });
});
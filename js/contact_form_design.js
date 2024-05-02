/* CONTACT US WEB PAGE CONTENTS -------------------------------------------------------------- */
/* Javascript styles for the fifth-CONTACT US webpage */
/* Styles for Nilo's DFC Filipino Treats Hub */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');

    // Function to reset star ratings to default state
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('active');
            star.style.color = '#D6560D'; // Set default star color
        });
        ratingInput.value = '0'; // Reset hidden input value
    }

    form.addEventListener('submit', function(event) {
        // Validate form fields before submission
        const name = form.querySelector('#first-name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !subject || !message) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill out all required fields.');
        }
    });

    // Reset form fields and star ratings when reset button is clicked
    const resetButton = form.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function(event) {
        // Reset form fields
        form.reset();

        // Reset star ratings to default state
        resetStars();

        // Re-apply event listeners for star rating
        stars.forEach(star => {
            star.addEventListener('click', handleStarClick);
        });
    });

    // Function to handle click event on stars
    function handleStarClick() {
        const value = parseInt(this.getAttribute('data-value'));

        // Set star color based on value
        stars.forEach((star, index) => {
            if (index < value) {
                star.classList.add('active'); // Activate selected stars
            } else {
                star.classList.remove('active'); // Deactivate unselected stars
            }
        });

        // Update hidden input value
        ratingInput.value = value;
    }

    // Event listener for star rating
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });
});


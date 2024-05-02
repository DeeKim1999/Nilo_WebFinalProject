document.addEventListener('DOMContentLoaded', function() {
    // Function to handle star click
    function handleStarClick(event) {
        const clickedStar = event.target;
        const stars = document.querySelectorAll('.star');
        const ratingValue = clickedStar.dataset.value;

        // Remove 'selected' class from all stars
        stars.forEach(star => {
            star.classList.remove('selected');
        });

        // Add 'selected' class to clicked star and stars before it
        clickedStar.classList.add('selected');
        const prevStars = Array.from(clickedStar.parentElement.children).slice(0, ratingValue - 1);
        prevStars.forEach(star => {
            star.classList.add('selected');
        });

        // Update the hidden input field value
        document.getElementById('website-rating-value').value = ratingValue;
    }

    // Add event listener to all stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
    });

    // Function to reset the star ratings
    function resetStarRatings() {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.classList.remove('selected');
        });

        // Reset the hidden input field value
        document.getElementById('website-rating-value').value = '';
    }

    // Add event listener to the reset button
    const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', resetStarRatings);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('review-form');
    const container = document.getElementById('reviews-container');
    let selectedRating = 0;

    // Handle star rating selection
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-value'));
            highlightStars(selectedRating);
            document.getElementById('rating').value = selectedRating;
        });
    });

    // Highlight stars up to the selected one
    function highlightStars(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    form.addEventListener('submit', function(event) {   //upon submit review form, add customer info and review below
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = selectedRating;
        const comment = document.getElementById('comment').value;

        if (name && rating && comment) {
            const review = document.createElement('div');
            review.classList.add('review');
            review.innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Rating:</strong> ${rating} stars</p>
                <p><strong>Comment:</strong> ${comment}</p>
            `;
            container.appendChild(review);

            // Clear form fields
            form.reset();
            selectedRating = 0;
            highlightStars(0);
        } else {
            alert('Please fill out all fields.');
        }
    });
});

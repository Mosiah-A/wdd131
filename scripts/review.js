////////// review counter ///////////////

document.addEventListener('DOMContentLoaded', () => {
    // Get the review count from localStorage or initialize it if it doesn't exist
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the review count
    reviewCount++;

    // Save the new review count to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count on the page
    document.getElementById('reviewCount').textContent = reviewCount;
});
    
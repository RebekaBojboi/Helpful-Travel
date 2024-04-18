document.addEventListener('DOMContentLoaded', function() {
    // Check if the contrast mode button exists
    const contrastToggle = document.getElementById('contrast-toggle');
    
    // Listen for a click event on the button
    contrastToggle.addEventListener('click', function() {
        // Toggle a class on the body or main container of the website
        document.body.classList.toggle('high-contrast');

        // Save the user's preference in local storage
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrastEnabled', 'true');
        } else {
            localStorage.removeItem('highContrastEnabled');
        }
    });

    // Check the user's saved preference and apply it
    if (localStorage.getItem('highContrastEnabled') === 'true') {
        document.body.classList.add('high-contrast');
    }
});
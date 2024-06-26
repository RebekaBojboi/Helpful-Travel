document.addEventListener('DOMContentLoaded', function() {
    // Select the nav menu links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to highlight the current page link
    function highlightCurrentPage() {
        // Get the current page filename from the URL
        const currentPage = window.location.pathname.split('/').pop();

        // Loop through nav links and add 'active' class to the current page link
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Function to handle keydown events for better accessibility
    function handleKeydown(e) {
        const { keyCode } = e;
        let currentIndex = Array.from(navLinks).indexOf(document.activeElement);

        switch (keyCode) {
            case 39: // Right arrow
            case 40: // Down arrow
                navigateLinks(1, currentIndex);
                break;
            case 37: // Left arrow
            case 38: // Up arrow
                navigateLinks(-1, currentIndex);
                break;
        }
    }

    // Helper function to navigate links
    function navigateLinks(direction, currentIndex) {
        e.preventDefault(); // Prevent default scrolling behavior
        currentIndex += direction; // Increment or decrement
        if (currentIndex >= navLinks.length) {
            currentIndex = 0; // Loop back to the first item
        } else if (currentIndex < 0) {
            currentIndex = navLinks.length - 1; // Loop to the last item
        }
        navLinks[currentIndex].focus(); // Set focus to the new link
    }

    // Attach the event listener to each nav link for keyboard accessibility
    navLinks.forEach(link => {
        link.addEventListener('keydown', handleKeydown);
    });

    // Highlight the current page in the navigation menu
    highlightCurrentPage();

    // Dark mode toggle functionality
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the nav menu links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to handle keydown events
    function handleKeydown(e) {
        const { keyCode } = e;
        let currentIndex = Array.from(navLinks).indexOf(document.activeElement);

        switch (keyCode) {
            case 39: // Right arrow
            case 40: // Down arrow
                e.preventDefault();
                currentIndex++;
                if (currentIndex >= navLinks.length) {
                    currentIndex = 0; // Loop back to the first item
                }
                navLinks[currentIndex].focus();
                break;
            case 37: // Left arrow
            case 38: // Up arrow
                e.preventDefault();
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = navLinks.length - 1; // Loop back to the last item
                }
                navLinks[currentIndex].focus();
                break;
        }
    }

    // Attach the event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('keydown', handleKeydown);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    // Update items in the dropdown based on selected category
    function updateItemSelection(category) {
        const itemSelect = document.getElementById('itemSelect');
        itemSelect.innerHTML = ''; // Clear existing options
        items[category].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            itemSelect.appendChild(option);
        });
    }

    // Handle form submission
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitFeedback();
    });

    // Function to handle feedback submission
    function submitFeedback() {
        const visualRating = document.getElementById('visualRating').value;
        const audioRating = document.getElementById('audioRating').value;
        const mobilityRating = document.getElementById('mobilityRating').value;
        const expensiveRating = document.getElementById('expensiveRating').value;
        const busyRating = document.getElementById('busyRating').value;
        const comfortRating = document.getElementById('comfortRating').value;
        const additionalNotes = document.getElementById('additionalNotes').value;

        // Here, you can add logic to store these values or send to a server
        console.log("Feedback Submitted", {
            visualRating,
            audioRating,
            mobilityRating,
            expensiveRating,
            busyRating,
            comfortRating,
            additionalNotes
        });
        alert('Feedback submitted successfully!');
    }
});
        <p>&copy; 2024 Accessible Travel Guide. All rights reserved.</p>
        <p>Follow us on [Social Media Links]</p>
    </footer>
</body>
</html>

document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    function updateItemSelection(category) {
        const itemSelect = document.getElementById('itemSelect');
        itemSelect.innerHTML = '<option value="">-select-</option>';
        if (items[category]) {
            items[category].forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                itemSelect.appendChild(option);
            });
        }
    }

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitFeedback();
    });

    function submitFeedback() {
        const feedback = {
            visualRating: document.getElementById('visualRating').value,
            audioRating: document.getElementById('audioRating').value,
            mobilityRating: document.getElementById('mobilityRating').value,
            expensiveRating: document.getElementById('expensiveRating').value,
            busyRating: document.getElementById('busyRating').value,
            comfortRating: document.getElementById('comfortRating').value,
            additionalNotes: document.getElementById('additionalNotes').value
        };
        console.log("Feedback Submitted", feedback);
        alert('Feedback submitted successfully!');
        resetForm(); // Reset the form fields after submission
    }

    function resetForm() {
        document.getElementById('feedbackForm').reset();
        updateItemSelection('');
    }
});

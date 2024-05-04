document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        selectElement.innerHTML = '<option value="">-select-</option>'; // Adds default select option
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
    }

    Object.keys(items).forEach(key => {
        populateDropdown(key + 'Select', items[key]);
    });

    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        displayTravelPlan();
    });

    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        if (!destination || !transportation || !accommodation || !service) {
            alert('Please make a selection for all categories.');
            highlightEmptySelections();
            return;
        }

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `<p>Your travel plan: Go to ${destination} with ${transportation}, stay at ${accommodation}, and enjoy ${service}.</p>`;
    }

    function highlightEmptySelections() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const select = document.getElementById(id);
            if (!select.value) {
                select.style.borderColor = 'red';
            } else {
                select.style.borderColor = 'initial';
            }
        });
    }
});

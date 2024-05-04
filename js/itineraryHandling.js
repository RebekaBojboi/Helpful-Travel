document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        selectElement.innerHTML = '<option value="">-select-</option>'; // Ensures a "-select-" option is at the top
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
    }

    // Populate all dropdowns upon DOM content loaded
    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

    // Handle form submission
    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateSelections()) {
            displayTravelPlan();
        } else {
            alert('Please make a selection for each category.');
        }
    });

    // Validate selections
    function validateSelections() {
        let allValid = true;
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const select = document.getElementById(id);
            if (select.value === "") {
                select.style.border = '2px solid red'; // Highlight in red
                allValid = false;
            } else {
                select.style.border = ''; // Remove highlight
            }
        });
        return allValid;
    }

    // Display the travel plan
    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `<p>You chose to go to ${destination} with ${transportation}, to stay at the ${accommodation} whilst you are there, and to have fun at ${service}.</p>`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        selectElement.innerHTML = '<option value="">-select-</option>'; // Adds a default prompt
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
        selectElement.addEventListener('change', function() {
            // Remove red border if a valid option is selected
            if (this.value !== "") {
                this.classList.remove('highlight');
            }
        });
    }

    // Initialize dropdowns
    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

    // Form submission handling
    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting traditionally
        if (validateSelections()) {
            displayTravelPlan(); // Display the travel plan if all selections are valid
        }
    });

    // Validate all selections and apply/remove red border based on the validity
    function validateSelections() {
        let allValid = true;
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const select = document.getElementById(id);
            if (select.value === "") {
                select.classList.add('highlight');
                allValid = false;
            } else {
                select.classList.remove('highlight');
            }
        });
        return allValid;
    }

    // Display the formatted travel plan
    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `<p>You chose to go to ${destination} with ${transportation}, to stay at the ${accommodation}, and to have fun at ${service}.</p>`;
    }

    // Reset function to clear selections and remove any highlighting
    document.getElementById('resetButton').addEventListener('click', function() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const selectElement = document.getElementById(id);
            selectElement.value = ""; // Reset the dropdown
            selectElement.classList.remove('highlight'); // Remove any highlights
        });
    });
});

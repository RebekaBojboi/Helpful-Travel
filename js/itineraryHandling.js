document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    // Populate dropdowns with the "-select-" option and then items
    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        if (!selectElement) {
            console.error("Dropdown element not found for selector:", selector);
            return;
        }
        // Adding a default option to enforce a selection
        selectElement.innerHTML = `<option value="">-select-</option>`; // Reset and add the default option
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
    }

    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateSelections()) {
            displayTravelPlan();
        }
    });

    function validateSelections() {
        let isValid = true;
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const select = document.getElementById(id);
            if (select.value === "") {
                select.classList.add('highlight');
                isValid = false;
            } else {
                select.classList.remove('highlight');
            }
        });
        return isValid;
    }

    function displayTravelPlan() {
        const resultsDiv = document.getElementById('itineraryResults');
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        resultsDiv.innerHTML = `<p>Your travel plan: Go to ${destination} with ${transportation}, stay at ${accommodation}, and enjoy ${service}.</p>`;
    }
});

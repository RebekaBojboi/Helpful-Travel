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
    }

    Object.keys(items).forEach(key => {
        populateDropdown(key + 'Select', items[key]);
    });

    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateSelections()) {
            displayTravelPlan();
        }
    });

    function validateSelections() {
        let isValid = true;
        Object.keys(items).forEach(key => {
            const selectElement = document.getElementById(key + 'Select');
            if (selectElement.value === "") {
                selectElement.classList.add('highlight');
                isValid = false;
            } else {
                selectElement.classList.remove('highlight');
            }
        });
        return isValid;
    }

    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `You chose to go to ${destination} with ${transportation}, to stay at ${accommodation}, and to have fun at ${service}.`;
    }

    document.getElementById('resetButton').addEventListener('click', function() {
        Object.keys(items).forEach(key => {
            const selectElement = document.getElementById(key + 'Select');
            selectElement.value = "";
            selectElement.classList.remove('highlight');
        });
    });
});

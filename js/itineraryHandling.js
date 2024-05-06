document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    console.log("Starting to populate dropdowns...");

    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        if (!selectElement) {
            console.error("Could not find select element:", selector);
            return;
        }
        selectElement.innerHTML = '<option value="">-select-</option>'; // Adds a default 'select' prompt
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.appendChild(optionElement);
        });
        console.log(`Populated ${selector} with ${options.length} options.`);
    }

    Object.keys(items).forEach(category => {
        populateDropdown(category + 'Select', items[category]);
    });

    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateSelections()) {
            displayTravelPlan();
        } else {
            console.error("Validation failed, selections are incomplete.");
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
        console.log("Validation status:", isValid);
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

    window.resetForm = function() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const selectElement = document.getElementById(id);
            selectElement.value = "";
            selectElement.classList.remove('highlight');
        });
        document.getElementById('itineraryResults').innerHTML = "";
        console.log("Form has been reset.");
    };
});

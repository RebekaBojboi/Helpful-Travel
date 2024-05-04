document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    // Populate dropdowns with the "-select-" option and items
    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        if (!selectElement) {
            console.error("Dropdown element not found for selector:", selector);
            return; // Stop further execution if the select element is not found
        }
        selectElement.innerHTML = '<option value="">-select-</option>'; // Default option
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
        console.log(`Dropdown for ${selector} populated.`);
    }

    // Initialize all dropdowns
    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

    // Form submission event handler
    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting traditionally
        displayTravelPlan(); // Call to display the calculated travel plan
    });

    // Function to display the travel plan if all fields are selected
    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        // Validation to ensure all dropdowns are selected
        if (!destination || !transportation || !accommodation || !service) {
            alert('Please select an option from each category.');
            highlightUnselected();
            return;
        }

        // Display the calculated travel plan
        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `<p>Your travel plan: Go to ${destination} with ${transportation}, stay at ${accommodation}, and enjoy ${service}.</p>`;
        console.log(`Travel Plan: ${destination}, ${transportation}, ${accommodation}, ${service}`);
    }

    // Function to highlight unselected fields
    function highlightUnselected() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const selectElement = document.getElementById(id);
            if (!selectElement.value) {
                selectElement.style.border = '2px solid red'; // Highlight in red
            } else {
                selectElement.style.border = ''; // Remove highlight
            }
        });
    }
});

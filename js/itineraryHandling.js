document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    // Populate dropdowns
    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        if (!selectElement) {
            console.error("Dropdown element not found for selector:", selector);
            return; // Stop further execution if the select element is not found
        }
        selectElement.innerHTML = ''; // Clear existing options
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.add(optionElement);
        });
        console.log(`Dropdown for ${selector} populated.`);
    }

    // Initialize dropdowns
    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

    // Form submission event handler
    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting traditionally
        console.log('Form submission triggered');
        displayTravelPlan(); // Call to display the calculated travel plan
    });

    // Display the calculated travel plan
    function displayTravelPlan() {
        const destination = document.getElementById('destinationSelect').value;
        const transportation = document.getElementById('transportationSelect').value;
        const accommodation = document.getElementById('accommodationSelect').value;
        const service = document.getElementById('serviceSelect').value;

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `<p>Your travel plan: Go to ${destination} with ${transportation}, stay at ${accommodation}, and enjoy ${service}.</p>`;
        console.log(`Travel Plan: ${destination}, ${transportation}, ${accommodation}, ${service}`);
    }
});

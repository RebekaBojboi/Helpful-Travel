document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    // Populate all dropdowns on page load
    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.appendChild(optionElement);
        });
    }

    populateDropdown('destinationSelect', items.destinations);
    populateDropdown('transportationSelect', items.transportation);
    populateDropdown('accommodationSelect', items.accommodation);
    populateDropdown('serviceSelect', items.services);

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
            alert('Please select an option from each category.');
            return;
        }

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `You chose to go to ${destination} with ${transportation}, to stay at ${accommodation}, and to have fun at ${service}.`;
    }

    function resetForm() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            document.getElementById(id).value = "";
        });
        document.getElementById('itineraryResults').innerHTML = "";
    }

    window.resetForm = resetForm; // Make resetForm globally available for the HTML button
});

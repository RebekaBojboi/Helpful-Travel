document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    function populateDropdown(selector, options) {
        const selectElement = document.getElementById(selector);
        selectElement.innerHTML = '<option value="">-select-</option>'; // Resets and adds default select option
        options.forEach(option => {
            const optionElement = new Option(option, option);
            selectElement.appendChild(optionElement);
        });
    }

    Object.keys(items).forEach(category => {
        populateDropdown(category + 'Select', items[category]);
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
            alert('Please select an option from each category.');
            return;
        }

        const resultsDiv = document.getElementById('itineraryResults');
        resultsDiv.innerHTML = `You chose to go to ${destination} with ${transportation}, to stay at ${accommodation}, and to have fun at ${service}.`;
    }

    function resetForm() {
        ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
            const selectElement = document.getElementById(id);
            selectElement.value = "";
            selectElement.classList.remove('highlight');
        });
        document.getElementById('itineraryResults').innerHTML = "";
    }

    window.resetForm = resetForm; // Expose the resetForm function globally for the HTML reset button
});

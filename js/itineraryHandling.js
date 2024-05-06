document.addEventListener('DOMContentLoaded', function() {
    const items = {
        destinations: ['Istanbul', 'London', 'Dubai', 'Antalya', 'Paris', 'Hong Kong', 'Bangkok', 'NYC', 'Cancun', 'Mecca'],
        transportation: ['American Airlines', 'Delta Airlines', 'Lufthansa', 'Southwest', 'Ryanair', 'Accessible Taxi Services'],
        accommodation: ['Marriott International', 'Hilton Worldwide', 'Intercontinental Hotels Group', 'Red Lion Hotel'],
        services: ['Massages', 'Sports Instructors', 'Yoga', 'Pottery', 'Basket Weaving', 'Diving']
    };

    Object.entries(items).forEach(([key, values]) => {
        populateDropdown(`${key}Select`, values);
    });

    document.getElementById('itineraryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateSelections()) {
            displayTravelPlan();
        }
    });

    document.getElementById('resetButton').addEventListener('click', resetForm);

    const submitButton = document.querySelector('form button[type="submit"]');
    submitButton.addEventListener('click', function() {
        this.classList.add('button-clicked');
        setTimeout(() => this.classList.remove('button-clicked'), 300); // Removes the class after 300 milliseconds
    });
});

function populateDropdown(selector, options) {
    const selectElement = document.getElementById(selector);
    options.forEach(option => {
        selectElement.add(new Option(option, option));
    });
}

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

function displayTravelPlan() {
    const destination = document.getElementById('destinationSelect').value;
    const transportation = document.getElementById('transportationSelect').value;
    const accommodation = document.getElementById('accommodationSelect').value;
    const service = document.getElementById('serviceSelect').value;

    const resultsDiv = document.getElementById('itineraryResults');
    resultsDiv.innerHTML = `<p>You chose to go to ${destination} with ${transportation}, to stay at the ${accommodation}, and to have fun at ${service}.</p>`;
}

function resetForm() {
    ['destinationSelect', 'transportationSelect', 'accommodationSelect', 'serviceSelect'].forEach(id => {
        const selectElement = document.getElementById(id);
        selectElement.value = "";
        selectElement.classList.remove('highlight');
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

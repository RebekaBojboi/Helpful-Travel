document.addEventListener('DOMContentLoaded', function() {
    // Initialize any UI components and load initial data
    initializeUI();
    loadInitialData();

    // Attach event listeners
    document.getElementById('categorySelect').addEventListener('change', updateItemOptions);
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackSubmit);
    document.querySelector('#dark-mode-toggle').addEventListener('click', toggleDarkMode);
});

function initializeUI() {
    // Set up any initial UI state or components
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

function loadInitialData() {
    // Load data required for the page or form
    updateItemOptions(); // Update item options based on the default category
}

function updateItemOptions() {
    const category = document.getElementById('categorySelect').value;
    const itemSelect = document.getElementById('itemSelect');
    // Simulate fetching items based on the selected category
    fetchItemsByCategory(category).then(items => {
        itemSelect.innerHTML = items.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
    });
}

function fetchItemsByCategory(category) {
    // Placeholder for fetching items based on category
    return Promise.resolve([
        { id: 'item1', name: 'Item 1' },
        { id: 'item2', name: 'Item 2' }
    ]);
}

function handleFeedbackSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form data:', Object.fromEntries(formData.entries()));

    // Submit feedback via AJAX
    submitFeedback(formData).then(response => {
        alert('Feedback submitted successfully!');
        console.log('Server response:', response);
    }).catch(error => {
        console.error('Failed to submit feedback:', error);
        alert('Failed to submit feedback.');
    });
}

function submitFeedback(formData) {
    // Placeholder for submitting feedback to the server
    return fetch('submit_feedback_url', {
        method: 'POST',
        body: formData
    }).then(res => res.json());
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark-mode'));
}

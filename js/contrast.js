document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrast-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');  // Assume there's a dark mode toggle button

    // Event listener for high-contrast toggle
    if (contrastToggle) {
        contrastToggle.addEventListener('click', function() {
            toggleHighContrast();
        });
    }

    // Event listener for dark mode toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            toggleDarkMode();
        });
    }

    // Check and apply saved preferences
    applySavedPreferences();
});

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    updateLocalStorage('highContrastEnabled', document.body.classList.contains('high-contrast'));
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    updateLocalStorage('darkModeEnabled', document.body.classList.contains('dark-mode'));
}

function updateLocalStorage(key, value) {
    if (value) {
        localStorage.setItem(key, 'true');
    } else {
        localStorage.removeItem(key);
    }
}

function applySavedPreferences() {
    if (localStorage.getItem('highContrastEnabled') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

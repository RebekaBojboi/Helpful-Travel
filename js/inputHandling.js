<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Feedback</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/inputHandling.js" defer></script>
</head>
<body>
    <header>
        <button onclick="toggleDarkMode()">Dark/Light Mode</button>
        <h1>Input Feedback</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="destinations.html">Destinations</a></li>
                <li><a href="transportation.html">Transportation</a></li>
                <li><a href="accommodation.html">Accommodation</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="input.html">Input</a></li>
                <li><a href="itinerary.html">Travel Itinerary</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form id="feedbackForm">
            <label for="categorySelect">Choose a category:</label>
            <select id="categorySelect" name="category" onchange="updateItemSelection(this.value)">
                <option value="destinations">Destinations</option>
                <option value="transportation">Transportation</option>
                <option value="accommodation">Accommodation</option>
                <option value="services">Services</option>
            </select>

            <label for="itemSelect">Choose an item:</label>
            <select id="itemSelect" name="item">
                <!-- Options will be dynamically filled based on category selection -->
            </select>

            <label for="visualRating">Visual Impairment Friendly (0-100):</label>
            <input type="number" id="visualRating" name="visual" min="0" max="100">

            <label for="audioRating">Auditory Impairment Friendly (0-100):</label>
            <input type="number" id="audioRating" name="audio" min="0" max="100">

            <label for="mobilityRating">Mobility Friendly (0-100):</label>
            <input type="number" id="mobilityRating" name="mobility" min="0" max="100">

            <label for="expensiveRating">Expensive (0-100):</label>
            <input type="number" id="expensiveRating" name="expensive" min="0" max="100">

            <label for="busyRating">Busy (0-100):</label>
            <input type="number" id="busyRating" name="busy" min="0" max="100">

            <label for="comfortRating">Comfortable (0-100):</label>
            <input type="number" id="comfortRating" name="comfort" min="0" max="100">

            <label for="additionalNotes">Additional Notes:</label>
            <textarea id="additionalNotes" name="notes"></textarea>

            <button type="submit">Submit Feedback</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 Accessible Travel Guide. All rights reserved.</p>
        <p>Follow us on [Social Media Links]</p>
    </footer>
</body>
</html>

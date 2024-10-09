document.addEventListener('DOMContentLoaded', function() {
    const productivityInput = document.getElementById('productivity');
    const submitButton = document.getElementById('submit');
    const readingsList = document.getElementById('readings');

    // Load saved readings from localStorage
    let productivityReadings = JSON.parse(localStorage.getItem('productivityReadings')) || [];

    // Function to update the list of last 10 readings
    function updateReadingsList() {
        readingsList.innerHTML = '';
        productivityReadings.slice(-10).reverse().forEach(reading => {
            const li = document.createElement('li');
            li.textContent = `Productivity level: ${reading}`;
            readingsList.appendChild(li);
        });
    }

    // Function to save a new reading
    function saveProductivityReading(value) {
        productivityReadings.push(value);
        localStorage.setItem('productivityReadings', JSON.stringify(productivityReadings));
        updateReadingsList();
    }

    // Handle submit button click
    submitButton.addEventListener('click', function() {
        const productivityValue = parseInt(productivityInput.value);
        if (productivityValue >= 1 && productivityValue <= 10) {
            saveProductivityReading(productivityValue);
            productivityInput.value = '';  // Clear input after submission
        } else {
            alert('Please enter a value between 1 and 10.');
        }
    });

    // Update the readings list on page load
    updateReadingsList();
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.log('Service Worker registration failed', err));
    });
}

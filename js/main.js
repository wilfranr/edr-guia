if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    fetch('data/locations.json')
        .then(response => response.json())
        .then(locations => {
            const locationsContainer = document.getElementById('locations-container');
            locations.forEach(location => {
                const locationElement = document.createElement('div');
                locationElement.classList.add('location');
                locationElement.innerHTML = `
                    <h2>${location.name}</h2>
                    <p>${location.region}</p>
                `;
                locationsContainer.appendChild(locationElement);
            });
        })
        .catch(error => console.error('Error fetching locations:', error));
});

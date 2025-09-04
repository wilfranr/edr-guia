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
    const regionsView = document.getElementById('regions-view');
    const locationsView = document.getElementById('locations-view');
    const regionsContainer = document.getElementById('regions-container');
    const locationsContainer = document.getElementById('locations-container');
    const locationsTitle = document.getElementById('locations-title');
    const backButton = document.getElementById('back-button');

    let allLocations = [];

    fetch('data/locations.json')
        .then(response => response.json())
        .then(data => {
            allLocations = data;
            const regions = [...new Set(allLocations.map(location => location.region))];
            renderRegions(regions);
        })
        .catch(error => console.error('Error fetching locations:', error));

    function renderRegions(regions) {
        regionsContainer.innerHTML = '';
        regions.forEach(region => {
            const regionElement = document.createElement('div');
            regionElement.classList.add('region-card');
            regionElement.textContent = region;
            regionElement.addEventListener('click', () => showLocationsView(region));
            regionsContainer.appendChild(regionElement);
        });
    }

    function showLocationsView(region) {
        regionsView.classList.add('hidden');
        locationsView.classList.remove('hidden');
        locationsTitle.textContent = region;

        const regionLocations = allLocations.filter(location => location.region === region);
        locationsContainer.innerHTML = '';
        regionLocations.forEach(location => {
            const locationElement = document.createElement('div');
            locationElement.classList.add('location-item');
            locationElement.textContent = location.name;
            locationsContainer.appendChild(locationElement);
        });
    }

    backButton.addEventListener('click', () => {
        locationsView.classList.add('hidden');
        regionsView.classList.remove('hidden');
    });
});

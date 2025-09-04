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

            // Group locations by region
            const groupedLocations = locations.reduce((acc, location) => {
                const region = location.region;
                if (!acc[region]) {
                    acc[region] = [];
                }
                acc[region].push(location);
                return acc;
            }, {});

            // Clear the container
            locationsContainer.innerHTML = '';

            // Create region elements
            for (const region in groupedLocations) {
                const regionElement = document.createElement('div');
                regionElement.classList.add('region');

                const regionTitle = document.createElement('h2');
                regionTitle.classList.add('region-title');
                regionTitle.textContent = region;
                regionElement.appendChild(regionTitle);

                const locationsList = document.createElement('div');
                locationsList.classList.add('locations-list');

                groupedLocations[region].forEach(location => {
                    const locationElement = document.createElement('div');
                    locationElement.classList.add('location');
                    locationElement.innerHTML = `
                        <h3>${location.name}</h3>
                    `;
                    locationsList.appendChild(locationElement);
                });

                regionElement.appendChild(locationsList);
                locationsContainer.appendChild(regionElement);

                // Add click event for collapsible
                regionTitle.addEventListener('click', () => {
                    locationsList.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error fetching locations:', error));
});

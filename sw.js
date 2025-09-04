const CACHE_NAME = 'tarnished-companion-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Note: This won't cache the JS/CSS assets from Vite,
  // as they have hashed names. A build-time integration is needed for that.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

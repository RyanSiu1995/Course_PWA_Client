importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.strategies.networkFirst();

workbox.routing.registerRoute(
    new RegExp('/api/'),
    workbox.strategies.networkFirst({
        cacheName: 'information-caching',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Adding the listener to the push event
self.addEventListener('push', function(e) {
    // TODO Handle the notification push
    console.log('Notification push detected: ', e.data.text());
    e.waitUntil(
        self.registration.showNotification(e.data.text())
    );
});
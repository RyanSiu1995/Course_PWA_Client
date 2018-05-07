importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.strategies.networkFirst();

// Adding the listener to the push event
self.addEventListener('push', function(e) {
    // TODO Handle the notification push
    console.log(e.data.text());
    e.waitUntil(
        self.registration.showNotification('Hello world!')
    );
});
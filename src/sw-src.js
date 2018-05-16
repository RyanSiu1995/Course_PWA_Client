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

// TODO make file caching dynamic by sending a message from client to sw
workbox.routing.registerRoute(
    new RegExp('/files/'),
    workbox.strategies.networkFirst()
);

// TODO prettify make it work with regexp
/*
workbox.routing.registerRoute(
    new RegExp('^\/info$|^\/lectures$|^\/assignments$|^\/tutorials$|^\/staff$'),
    workbox.strategies.networkFirst()
);
*/

// routes to be cached for react-router
workbox.routing.registerRoute(
    new RegExp('/info'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('/assignments'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('/lectures'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('/tutorials'),
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('/staff'),
    workbox.strategies.networkFirst()
);




// Adding the listener to the push event
self.addEventListener('push', function(e) {
    // TODO Handle the notification push
    console.log('Notification push detected: ', e.data.text());
    e.waitUntil(
        self.registration.showNotification(e.data.text())
    );
});
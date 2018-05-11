'use strict';
const express = require('express');
const port = 8080;
var app = express();
// WebSocket for notification push
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
var socketConnection;
// Web Push
var serverKey = 'AAAAv0b6qUo:APA91bHH6ogyI5jVz7VOuYq6_oKpJOxBts9tUnnrOj_NBh2uy-Ea0BF6ZkcG4ei37TRm3fmjw_vsmDzMUK066SfZTDnThtXgdA-NBV-7Al21EQmE-qwrivzKuYdpymfoJcVNZkqs3A96';
const webpush = require('web-push');
webpush.setGCMAPIKey(serverKey);
// Server setting
const path = require('path');
const buildPath = path.resolve(__dirname, '../build');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', express.static(buildPath));

app.post('/subscribe', function(req, res) {
    const subObj = req.body;
    socketConnection.sendUTF(JSON.stringify(subObj));
    res.send('Subscribed');
});

app.get('/go', function(req, res) {
    const pushSubscription = {
        endpoint: 'https://android.googleapis.com/gcm/send/fjeF6OZWG2Y:APA91bFXFQT-PrVYU1RCZwPSvq3vLFnTg78PH3Khu92fyOa8CwFJVj-rSBruEuY8vC8i1dQOTPLDGL3ealL5HxID0C1Tt-r7QLWowiWXLxPqF0ZxleEj4uEgzXYluVdOtpgZNuD-ai6G',
        keys: {
            p256dh: "BArxCil4sJ+gJECjRGUyfqA1AnNKRHfzTdOxt5TIP9f8B6YaezXYtLQ8EK1T0WFsY5OemlKHbMOP4/5v4U8MKJE=",
            auth: "1gDbmdI151x3KTV+5LxZig=="
        }
    };
    
    res.send('hello');
});

app.listen(port, function() {
    console.log('Server is now running at ' + port);
});

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('Backend WebSocket Client Connected');
    // Globalize the connection
    socketConnection = connection;
    
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    
    connection.on('close', function() {
        console.log('Connection Closed');
    });

    connection.on('message', function(message) {
        // TODO receive the server push
        if (message.type === 'utf8') {
            console.log(message);
            const body = JSON.parse(message.utf8Data);
            const pushSubscription = {
                endpoint: body.endpoint,
                keys: {
                    p256dh: body.p256dh,
                    auth: body.auth
                }
            };
            webpush.sendNotification(
                pushSubscription,
                body.message
            ).then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res);
            });
        }
    });
    
    function sendToServer() {
        if (connection.connected) {
            const pushSubscription = {
                endpoint: 'https://android.googleapis.com/gcm/send/fjeF6OZWG2Y:APA91bFXFQT-PrVYU1RCZwPSvq3vLFnTg78PH3Khu92fyOa8CwFJVj-rSBruEuY8vC8i1dQOTPLDGL3ealL5HxID0C1Tt-r7QLWowiWXLxPqF0ZxleEj4uEgzXYluVdOtpgZNuD-ai6G',
                keys: {
                    p256dh: "BArxCil4sJ+gJECjRGUyfqA1AnNKRHfzTdOxt5TIP9f8B6YaezXYtLQ8EK1T0WFsY5OemlKHbMOP4/5v4U8MKJE=",
                    auth: "1gDbmdI151x3KTV+5LxZig=="
                }
            };
            connection.sendUTF(JSON.stringify(pushSubscription));
        }
    }
    // sendToServer();
});
// Start the connection to websocket
client.connect('ws://backend:80/ws/');


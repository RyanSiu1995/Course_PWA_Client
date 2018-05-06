'use strict';
const express = require('express');
const port = 8080;
var app = express();
// WebSocket for notification push
var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();
var socketConnection;

const path = require('path');
const buildPath = path.resolve(__dirname, '../build');

app.use('/', express.static(buildPath));

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
            console.log("Received: '" + message.utf8Data + "'");
        }
    });
    
    function sendToServer() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
        }
    }
    sendToServer();
});
// Start the connection to websocket
client.connect('ws://backend:80/ws/');

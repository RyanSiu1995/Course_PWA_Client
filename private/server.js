'use strict';
const express = require('express');
const port = 8080;
var app = express();

const path = require('path');
const buildPath = path.resolve(__dirname, '../build');

app.use('/', express.static(buildPath));

app.listen(port, function() {
    console.log('Server is now running at ' + port);
});
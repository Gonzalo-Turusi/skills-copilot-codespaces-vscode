// Create web server

// Import the express library
const express = require('express');

// Create an express application
const app = express();

// Serve the comments.html file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/comments.html');
});

// Serve the comments.js file
app.get('/comments.js', function(req, res) {
    res.sendFile(__dirname + '/comments.js');
});

// Serve the comments.json file
app.get('/comments.json', function(req, res) {
    res.sendFile(__dirname + '/comments.json');
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
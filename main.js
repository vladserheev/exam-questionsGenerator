const express = require('express');
const path = require('path');

// Create Express app
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
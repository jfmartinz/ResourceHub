const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Fetch port from .env or default to 3000

app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); // Adjust static file serving directory

app.get('/api/token', (req, res) => {
    res.json({ token: process.env.GITHUB_TOKEN });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

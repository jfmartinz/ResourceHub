const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' })); // Allow all origins

app.use(express.static(path.join(__dirname)));

app.get('/api/token', (req, res) => {
    res.json({ token: process.env.GITHUB_TOKEN });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

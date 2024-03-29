const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.use(bodyParser.json());

const routes = require('./routes'); // Import the routes

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api', routes); // Use the routes

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

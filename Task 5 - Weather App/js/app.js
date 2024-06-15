const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join("../", 'index.html'));
});

// Endpoint to get weather data
app.get('/weather', (req, res) => {
    const city = req.query.city;
    const options = {
        url: `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
        headers: {
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
            'x-rapidapi-key': 'f700a4f1bemsh5590250c176984bp170922jsn3ba372de6f4d'
        }
    };
    request(options, (error, response, body) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send(body);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

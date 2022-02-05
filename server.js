// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

//var https = require('https');
//var fs = require('fs');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');
// Configure app to use route
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'alexanderwebsiteClientApp/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'alexanderwebsiteClientApp/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});
/*
var options = {
    key: fs.readFileSync('./client-key.pem'),
    cert: fs.readFileSync('./client-cert.pem')
  };
*/
//https.createServer(options, app).listen(port);
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
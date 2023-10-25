const restService = require('./routes/user-route');
const express = require('express');
const SERVICE_ENDPOINT = '/mongocrud';
const app = express();

// BODY PARSER
app.use(express.json());

// MOUNTING ROUTES
app.use(`${SERVICE_ENDPOINT}`, restService.router);

const port = process.env.PORT ? process.env.Port : 4000
app.listen(port, ()=> {
    console.log('server listening on port ' + port);
})
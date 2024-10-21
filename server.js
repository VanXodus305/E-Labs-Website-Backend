const express = require('express');
const dotenv = require('dotenv');
const testRoute = require('./routes/test-route');
const app = express();
const connect = require('./db/connect');

dotenv.config();

connect();

app.use('/test', testRoute);

app.listen(8080 || process.env.PORT, () => console.log('SERVER STARTED ' + process.env.PORT));

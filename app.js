'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes')
var bodyParser = require('body-parser');





// set the view engine to ejs
app.set('view engine', 'ejs');
// app.use(express.json())
// app.use(express.urlencoded())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(routes);

// start server
app.listen(port);
console.log('Express started. Listening on %s', port);

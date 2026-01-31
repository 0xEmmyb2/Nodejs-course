const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());

// Use our routes
app.use('/', routes);

module.exports = app;
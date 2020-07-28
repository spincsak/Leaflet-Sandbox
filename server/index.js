const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

//logging middleware
app.use(morgan('dev'));

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

//connect to routes
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;

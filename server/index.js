'use strict';
const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

// const db = require('../db');
// const db = require('../data');

const apiRouter = require('./router/api');

const mongoose = require('mongoose');

app.use(express.static(`${__dirname}/dist`));

app.use('/api/', [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  apiRouter
]);

const server = app.listen(1337, () => {
  console.log('Server up and listening on port 1337');
});

const user = 'user1';
const password = 'xfittracker';
const db = 'xfittracker';
mongoose.connect(`mongodb://${user}:${password}@localhost:27017/${db}?authMechanism=SCRAM-SHA-1`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully connected to MongoDB");
  }
});

module.exports = app;
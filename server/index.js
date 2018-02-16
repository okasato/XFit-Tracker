'use strict';
const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = require('./router/api');

const mongoose = require('mongoose');

app.use(express.static(`${__dirname}/dist`));

app.use("*",(req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  next();
});

app.use('/api/', [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  apiRouter
]);

// app.use('/api/workouts', [
//   bodyParser.json(), 
//   bodyParser.urlencoded({ extended: true }), 
//   apiRouter 
// ]);

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
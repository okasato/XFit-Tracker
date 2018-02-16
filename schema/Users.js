const mongoose = require('mongoose');

const Users = mongoose.Schema({  
  username: String,
  workouts: [
    {
      date: String,
      record: [String]
    }
  ]
});

module.exports = mongoose.model('Uers', Users);
const mongoose = require('mongoose');

const Workouts = mongoose.Schema({
  exercise: {
    squat: [String],
    deadlift: [String],
    Press: [String],
    clean: [String],
    jerk: [String],
    snatch: [String],
    pullups: [String],
    pushups: [String],
    others: [String],
  }
});

module.exports = mongoose.model('Workouts', Workouts);
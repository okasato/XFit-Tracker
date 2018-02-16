const Workouts = require('../../schema/Workouts');

module.exports = (req, res) => {
  Workouts.find()
    .then(workouts => res.send(workouts))
    .catch(err => res.status(500).json({ err }));
};
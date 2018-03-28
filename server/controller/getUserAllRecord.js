const Users = require('../../schema/Users');

module.exports = (req, res) => {
  console.log('user', req.params);
  Users.find({ 'username': req.params.username })
    .then(users => {
      return users[0].workouts.filter(workout => {
        return workout.date === req.params.date;
      })
    })
    .then(workout => res.send(workout))
    .catch(err => res.status(500).json({ err }));
};
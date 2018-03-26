const Users = require('../../schema/Users');

module.exports = (req, res) => {
  Users.update(
    { 'username': req.params.username }, 
    { $push: { workouts: req.body } },
    err => {
      if (err) throw res.status(500).json({ err });
      return res.send('Add new record');
    }
  );
};
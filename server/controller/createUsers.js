const Users = require('../../schema/Users');

module.exports = (req, res) => {
  Users.insert({ 'username': req.body.username })
    .then(() => res.send('Add new user'))
    .catch(err => res.status(500).json({ err }));
};
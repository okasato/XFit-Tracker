const Users = require('../../schema/Users');

module.exports = (req, res) => {
  Users.find()
    .then(users => res.send(users))
    .catch(err => res.status(500).json({ err }));
};
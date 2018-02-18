const Users = require('../../schema/Users');

module.exports = (req, res) => {
  console.log('user', req.params);
  Users.find({ 'username': req.params.username })
    .then(users => res.send(users))
    .catch(err => res.status(500).json({ err }));
};
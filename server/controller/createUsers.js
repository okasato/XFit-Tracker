const Users = require('../../schema/Users');

module.exports = (req, res) => {
  console.log('this is req body', req.body);
  new Users({ 'username': req.body.username })
    .save(err => {
      if (err) throw res.status(500).json({ err });
      return res.send('Add new user');
    })
};
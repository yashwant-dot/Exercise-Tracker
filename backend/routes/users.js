const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json('Error' + error))
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User( {username} );

  newUser.save()
    .then(() => res.send('User Added!'))
    .catch(error => res.status(400).json('Error' + error))
});

module.exports = router;
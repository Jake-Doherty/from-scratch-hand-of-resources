const { Router } = require('express');
const { User } = require('../models/User.js');

module.exports = Router().get('/', async (req, res) => {
  const users = await User.getAll();
  res.json(users);
});

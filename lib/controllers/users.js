const { Router } = require('express');
const { User } = require('../models/User.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const user = await User.getById(req.params.id);
    res.json(user);
  })
  .get('/', async (req, res) => {
    const users = await User.getAll();
    res.json(users);
  });

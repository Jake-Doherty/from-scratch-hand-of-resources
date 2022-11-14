const { Router } = require('express');
const { User } = require('../models/User.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const user = await User.getById(req.params.id);
      if (!user) next();
      res.json(user);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const user = await User.insert(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const user = await User.updateById(req.params.id, req.body);
      if (!user) next();
      res.json(user);
    } catch (e) {
      next(e);
    }
  });

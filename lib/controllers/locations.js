const { Router } = require('express');
const { Location } = require('../models/Location.js');
const pool = require('../utils/pool.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const location = await Location.getById(req.params.id);
      if (!location) next();
      res.json(location);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const locations = await Location.getAll();
      res.json(locations);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const location = await Location.insert(req.body);
      res.json(location);
    } catch (e) {
      next(e);
    }
  });

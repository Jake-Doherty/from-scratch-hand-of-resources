const { Router } = require('express');
const { Plant } = require('../models/Plant.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const plant = await Plant.getById(req.params.id);
      if (!plant) next();
      res.json(plant);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const plants = await Plant.getAll();
      res.json(plants);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const plant = await Plant.insert(req.body);
      if (!plant) next();
      res.json(plant);
    } catch (e) {
      next(e);
    }
  });

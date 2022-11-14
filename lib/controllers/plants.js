const { Router } = require('express');
const { Plant } = require('../models/Plant.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const plants = await Plant.getAll();
    res.json(plants);
  } catch (e) {
    next(e);
  }
});

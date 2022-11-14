const { Router } = require('express');
const { Location } = require('../models/Location.js');

module.exports = Router().get('/', async (req, res, next) => {
  const location = await Location.getAll();
  res.json(location);
});

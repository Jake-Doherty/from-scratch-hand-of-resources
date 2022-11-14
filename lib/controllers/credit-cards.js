const { Router } = require('express');
const { CreditCard } = require('../models/CreditCard.js');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const creditCards = await CreditCard.getAll();
    res.json(creditCards);
  } catch (e) {
    next(e);
  }
});

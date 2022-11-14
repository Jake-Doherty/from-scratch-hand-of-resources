const { Router } = require('express');
const { CreditCard } = require('../models/CreditCard.js');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const creditCard = await CreditCard.getById(req.params.id);
      if (!creditCard) next();
      res.json(creditCard);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const creditCards = await CreditCard.getAll();
      res.json(creditCards);
    } catch (e) {
      next(e);
    }
  });

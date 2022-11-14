const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/users', require('./controllers/users.js'));
app.use('/plants', require('./controllers/plants.js'));
app.use('/credit-cards', require('./controllers/credit-cards.js'));
app.use('/locations', require('./controllers/locations.js'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

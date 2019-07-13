const express = require('express');
const router = express.Router();

const getAll = require('./api/')

router.use((req, res, next) => {
  console.log(`Todays date: \n ${new Date().getFullYear()}`);
  next();
});

router.get('/', (req, res) => {
  res.send('This year is logged to the console.');
});

module.exports = router;


const express = require('express');
const router = express.Router();

const getAll = require('./api/getProducts');

router.use('/api', (req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  getAll(res);
});

module.exports = router;

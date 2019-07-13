const express = require('express');
const router = express.Router();

const getAll = require('../api/getProducts');

router.get('/', (req, res) => {
  res.redirect('/products');
});

module.exports = router;

const express = require('express');
const router = express.Router();

const getAllProducts = require('../api/getProducts');

router.get('/', (req, res) => getAllProducts(res));

module.exports = router;

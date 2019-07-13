const Products = require('../Schemas/Schema');

const getAllProducts = response => {
  Products.find((err, data) => {
    if (err) return response.json({ success: false, error: err });
    return response.json({ success: true, products: data });
  });
};

module.exports = getAllProducts;

const Products = require('../Schemas/Products');

exports.getProducts = response => {
  Products.find((err, products) => {
    if (err) return response.json({ success: false, error: err });
    return response.json({ success: true, products });
  });
};

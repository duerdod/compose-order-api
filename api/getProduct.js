const Product = require('../Schemas/Product');

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.findById({ _id: id }, (err, product) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, product });
  });
};

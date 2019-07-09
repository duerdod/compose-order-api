const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    _id: Number,
    grupId: Number,
    name: String,
    price: Number,
    currency: String,
    qtySuffix: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);

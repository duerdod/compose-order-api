const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
  _id: Number,
  name: String,
  description: String,
  images: Array
});

module.exports = mongoose.model('Product', Product, 'productinformation');

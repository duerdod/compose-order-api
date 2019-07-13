const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const ProductSchema = new Schema(
  {
    _id: Number,
    groupId: Number,
    name: String,
    price: Number,
    currency: String,
    qtySuffix: String
  },
  { timestamps: true }
);

// Create and export model
module.exports = mongoose.model('Product', ProductSchema);

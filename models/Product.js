const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  imageName:  Array,
  
  image: {
    type: String,
  },
  category: {
    type: String,
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
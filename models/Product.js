const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // imageName: {
  //   type: String,
  //   default: "none",
  //   required: true
  // },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price:{
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false,
    unique: false
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
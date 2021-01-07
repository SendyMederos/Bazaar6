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
<<<<<<< HEAD
  
  image: Array,
  
=======
  image: Array,
>>>>>>> d7cb1e407cd4b3e263e7e422c32bf9079b86179f
  category: {
    type: String,
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
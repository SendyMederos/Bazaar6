const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: {
    type: String,
  },
  description:{
    type: String,
  },
  price:{
    type: String,
    unique: true
  },
  image:{
    type: String,
    unique: true 
  },
});

 export const Product = mongoose.model("Product", ProductSchema);


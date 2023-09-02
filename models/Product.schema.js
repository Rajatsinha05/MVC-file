const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  img: String,
  price: Number,
});

const product = mongoose.model("Product", productSchema);
module.exports = product;

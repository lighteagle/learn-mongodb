var mongoose = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  amount: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

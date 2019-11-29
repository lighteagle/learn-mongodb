var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

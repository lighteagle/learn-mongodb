const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    postalCode: Number
  },
  hobbies: [String],
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

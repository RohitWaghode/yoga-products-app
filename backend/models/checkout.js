const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  user_uid: { type: String },
  product_id: { type: String },
  quantity: { type: String, required: true },
});
module.exports = {
  name: "Checkout",
  schema: checkoutSchema,
};

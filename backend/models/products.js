const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String },
    product_images: { type: String },
    product_description: { type: String },
    product_price: { type: String },
  },
  { timestamps: true }
);

module.exports = {
  name: "Product",
  schema: productSchema,
};

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    description: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

module.exports = {
  name: "Product",
  schema: productSchema,
};

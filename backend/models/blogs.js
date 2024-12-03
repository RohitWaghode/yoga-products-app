const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    articles: { type: String, required: true },
    // preview: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = {
  name: "Blog",
  schema: blogSchema,
};

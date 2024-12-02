const mongoose = require("mongoose");
const { utils } = require("../utils");

const userScema = new mongoose.Schema(
  {
    uid: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email_address: { type: String, required: true },
    mobile_number: { type: Number, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userScema.pre("save", async function (next) {
  if (!this.uid) {
    this.uid = await utils.generateUid("user");
  }
  next();
});

module.exports = {
  name: "User",
  schema: userScema,
};

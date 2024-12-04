const mongoose = require("mongoose");
const models = require("../models");

module.exports = function initConnection() {
  mongoose.connect(
    "mongodb+srv://rohitwaghode67:BfcJrK6x6BAW3T38@yoga-product-database.1ia13.mongodb.net/?retryWrites=true&w=majority&appName=yoga-product-database"
  );
  let database = mongoose.connection;
  database.on("error", function (err) {
    console.log("Failed to connect database", err);
    process.exit(1);
  });

  database.on("connected", function () {
    console.log("Database Connected");
  });

  database.on("open", async function () {
    console.log("Database Connection opened");
    await models.setup(database);
    console.log("Models set successfully");
  });
};

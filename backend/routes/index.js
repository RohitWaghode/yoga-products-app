function getRoutes(router) {
  const API_VERSION = "v1";
  const API_PREFIX = `/yoga-app/${API_VERSION}`;

  // ping
  router.get("/ping", async (req, res) => {
    res.send("success...");
  });

  // users
  require("./user")(router, API_PREFIX);

  // products
  require("./products")(router, API_PREFIX);

  // blogs
  require("./blogs")(router, API_PREFIX);

  // carts
  require("./carts")(router, API_PREFIX);
  return router;
}

module.exports = getRoutes;

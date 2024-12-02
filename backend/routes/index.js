function getRoutes(router) {
  const API_VERSION = "v1";
  const API_PREFIX = `/help-desk/${API_VERSION}`;

  // ping
  router.get("/ping", async (req, res) => {
    res.send("success...");
  });

  return router;
}

module.exports = getRoutes;

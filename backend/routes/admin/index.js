const adminControllers = require("../../controllers/admin");

function adminRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/admin/create", adminControllers.createAdmin);
}

module.exports = adminRoutes;

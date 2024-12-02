const userControllers = require("../../controllers/user");

function userRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/user/create", userControllers.createUser);
}

module.exports = userRoutes;

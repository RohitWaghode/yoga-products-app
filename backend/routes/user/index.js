const userControllers = require("../../controllers/user");

function userRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/users/register", userControllers.createUser);

  router.post(API_PREFIX + "/users/login", userControllers.loginUsers);

  router.get(API_PREFIX + "/users/list", userControllers.listUsers);
}

module.exports = userRoutes;

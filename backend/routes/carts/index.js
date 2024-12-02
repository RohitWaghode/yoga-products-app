const checkoutCOntrollers = require("../../controllers/checkout");

function cartRoutes(router, API_PREFIX) {
  router.post(API_PREFIX + "/checkout/add", checkoutCOntrollers.createCheckout);
}
module.exports = cartRoutes;

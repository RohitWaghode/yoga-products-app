const productsControllers = require("../../controllers/products");
const multer = require("multer");

function productsRoutes(router, API_PREFIX) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage: storage });

  router.post(
    API_PREFIX + "/products/create",
    upload.single("image"),
    productsControllers.createProducts
  );

  router.get(API_PREFIX + "/products/list", productsControllers.listProducts);

  router.put(
    API_PREFIX + "/products/edit/:_id",
    upload.single("image"),
    productsControllers.editProducts
  );

  router.delete(
    API_PREFIX + "/products/delete/:_id",
    productsControllers.deleteProducts
  );
}

module.exports = productsRoutes;

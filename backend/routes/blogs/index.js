const blogsControllers = require("../../controllers/blogs");
const multer = require("multer");

function blogsRoutes(router, API_PREFIX) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/blogs/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage: storage });

  router.post(
    API_PREFIX + "/blogs/create",
    upload.single("image"),
    blogsControllers.createBlogs
  );

  router.get(API_PREFIX + "/blogs/list", blogsControllers.listBlogs);
}

module.exports = blogsRoutes;

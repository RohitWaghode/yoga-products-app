const createBlogs = async (req, res) => {
  const { title, articles, preview } = req.body;
  const image = req.file;

  if (!title) {
    return res.error("Title is required");
  } else if (!articles) {
    return res.error("Articles is required");
  } else if (!preview) {
    return res.error("Preview is required");
  } else if (!image) {
    return res.error("Image is required");
  }

  try {
    const blogs = await _models.Blog.create({
      title,
      articles,
      preview,
      image: image.filename,
    });
    return res.success(blogs);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = createBlogs;

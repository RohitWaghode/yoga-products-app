const listBlogs = async (req, res) => {
  try {
    const blogs = await _models.Blog.find();

    return res.success(blogs);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = listBlogs;

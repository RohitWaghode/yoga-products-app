const editProducts = async (req, res) => {
  const filter = { _id: req.params._id };
  const { title, description, price } = req.body;
  const image = req.file;

  if (!title) {
    return res.error("Title is required");
  } else if (!image) {
    return res.error("Image is required");
  } else if (!description) {
    return res.error("Description is required");
  } else if (!price) {
    return res.error("Price is required");
  }
  try {
    const products = await _models.Product.findOneAndUpdate(
      filter,
      { title, image: image.filename, description, price },
      {
        new: true,
      }
    );
    if (!products) {
      return res.error("Poruct not found");
    }
    return res.success(products);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = editProducts;

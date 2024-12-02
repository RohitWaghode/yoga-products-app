const deleteProducts = async (req, res) => {
  const filter = { _id: req.params._id };

  try {
    const result = await _models.Product.findOne(filter);
    if (!result) {
      return res.error("Product already deleted");
    }

    const products = await _models.Product.deleteOne(filter);
    if (!products) {
      return res.error("Product not found");
    }

    return res.success("Product delete successfully");
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = deleteProducts;

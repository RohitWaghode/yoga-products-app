const listSingleProducts = async (req, res) => {
  const filter = { _id: req.params._id };

  try {
    const result = await _models.Product.findOne(filter);
    if (!result) {
      return res.error("Product not found");
    }
    return res.success(result);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = listSingleProducts;

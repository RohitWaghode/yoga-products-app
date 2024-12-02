const listProducts = async (req, res) => {
  try {
    const products = await _models.Product.find();

    return res.success(products);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = listProducts;

const createCheckout = async (req, res) => {
  const { user_uid, product_id, quantity } = req.body;

  if (!user_uid) {
    return res.error("User Id is required");
  } else if (!product_id) {
    return res.error("Product Id is required");
  } else if (!quantity) {
    return res.error("Quantity is requiredd");
  }

  try {
    const user = await _models.User.findOne({ uid: user_uid });
    if (!user) {
      return res.error("User not found");
    }

    const product = await _models.Product.findOne({ _id: product_id });

    if (!product) {
      return res.error("Product not found");
    }

    const checkout = await _models.Checkout.create(req.body);

    return res.success(checkout);
  } catch (error) {
    console.log(error);
    return res.error("Something went wrong", error);
  }
};

module.exports = createCheckout;

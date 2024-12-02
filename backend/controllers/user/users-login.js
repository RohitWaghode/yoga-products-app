const loginUsers = async (req, res) => {
  const { email_address, password } = req.body;

  try {
    const users = await _models.User.findOne({ email_address });
    if (!users) {
      return res.error("User not found");
    }

    return res.success(users);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = loginUsers;

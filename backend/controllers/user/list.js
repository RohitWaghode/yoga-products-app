const listUsers = async (req, res) => {
  try {
    const result = await _models.User.find();

    return res.success(result);
  } catch (error) {
    return res.error("Something went wrong", error);
  }
};

module.exports = listUsers;

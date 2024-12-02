const createUser = async (req, res) => {
  const { first_name, last_name, email_address, mobile_number, password } =
    req.body;

  try {
    const users = await _models.User.create(req.body);
    return res.success(users);
  } catch (error) {
    console.log("error", error);
    return res.error("Something went wrong");
  }
};

module.exports = createUser;

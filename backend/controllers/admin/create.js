const { utils } = require("../../utils");

const createAdmin = async (req, res) => {
  const {
    first_name,
    last_name,
    email_address,
    mobile_number,
    password,
    user_type,
  } = req.body;

  const userType = "admin";

  const emailError = utils.validateEmail(email_address);
  if (emailError) {
    return res.error(emailError);
  }

  const mobileError = utils.validateMobile(mobile_number);
  if (mobileError) {
    return res.error(mobileError);
  }

  const passwordError = utils.validatePassword(password);
  if (passwordError) {
    return res.error(passwordError);
  }

  const fieldError = utils.validateFilds(first_name, last_name);
  if (fieldError) {
    return res.error(fieldError);
  }

  if (user_type !== userType) {
    return res.error("Unauthorised access");
  }
  try {
    const admin = await _models.User.findOne();
    if (admin) {
      return res.error("Admin already exist");
    }

    const result = await _models.User.create(req.body);

    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.error("Something went wrong", error);
  }
};
module.exports = createAdmin;

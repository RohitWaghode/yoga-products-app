const { utils } = require("../../utils");

const createUser = async (req, res) => {
  const { first_name, last_name, email_address, mobile_number, password } =
    req.body;

  const emailError = utils.validateEmail(email_address);
  console.log("emailError", emailError);
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
  try {
    const emailExist = await _models.User.findOne({ email_address });
    if (emailExist) {
      return res.error("User already Exist");
    }

    const mobileExist = await _models.User.findOne({ mobile_number });
    if (mobileExist) {
      return res.error("Mobile Number already exist");
    }
    const users = await _models.User.create(req.body);

    return res.success(users);
  } catch (error) {
    console.log("error", error);
    return res.error("Something went wrong");
  }
};

module.exports = createUser;

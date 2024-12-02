const uuid = require("uuid");

const utils = {
  generateUid: async function generateUid(prefix, val = 10) {
    return `${prefix}${uuid.v4()}`.substring(val);
  },

  validateEmail: function validateEmail(email_address) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email_address) {
      return "Email Address is required";
    } else if (!emailRegex.test(email_address)) {
      return "Invalid Email Address";
    }
  },

  validateMobile: function validateMobile(mobile_number) {
    const mobileRegex = /^\d{10}$/;

    if (!mobile_number) {
      return "Mobile Number is required";
    } else if (!mobileRegex.test(mobile_number)) {
      return "Invalid Mobile Number";
    }
  },

  validatePassword: function validatePassword(password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]).{8,15}$/;

    if (!password) {
      return "Password is required";
    } else if (!passwordRegex.test(password)) {
      return "Invalid Password, It must be a 8-15 characters long, included at least number and special characters";
    }
  },

  validateFilds: function validateFilds(first_name, last_name) {
    if (!first_name) {
      return "First name is required";
    } else if (!last_name) {
      return "Last name is required";
    }
  },
};

module.exports = { utils };

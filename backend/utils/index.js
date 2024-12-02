const uuid = require("uuid");

const utils = {
  generateUid: async function generateUid(prefix, val = 10) {
    return `${prefix}${uuid.v4()}`.substring(val);
  },
};

module.exports = { utils };

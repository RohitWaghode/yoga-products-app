const uuid = require("uuid");

const utils = {
  generateUid: async function generateUid(prefix) {
    return `${prefix}${uuid.v4()}`.substring(10);
  },
};

module.exports = { utils };

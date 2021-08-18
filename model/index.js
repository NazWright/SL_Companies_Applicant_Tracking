const joi = require("joi");

module.exports = {
  USER: require("./User/User")(joi),
};

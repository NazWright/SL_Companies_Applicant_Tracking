//keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  //in production
  module.exports = require("./prod");
} else {
  //we are in the dev env

  // immediately pull the dev keys and export them
  module.exports = require("./dev");
}

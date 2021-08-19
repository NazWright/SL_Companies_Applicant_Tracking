//  intial setup tests
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect(keys.testMongoURI);
  mongoose.connection
    .once("open", () => {
      done();
    }) // once mongoose emits 'open' event
    .on("error", (error) => {
      // once mongoose emits an 'error'
      console.warn("Warning", error);
    });
});

require("./controller/index");

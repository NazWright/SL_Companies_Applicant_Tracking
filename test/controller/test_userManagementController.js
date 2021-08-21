const assert = require("assert");
const request = require("supertest");
const User = require("../../db-objects/User");
const app = require("../../index");
const bcrypt = require("bcrypt");

const isObjectEmpty = (testedObject) => {
  return Object.keys(testedObject).length === 0;
};

describe("Testing the user controller", () => {
  const email = "nazwrightthedeveloper@gmail.com";
  const server = request(app);

  before(() => {
    User.deleteMany({}, (err, result) => {
      if (err) console.error(err);
    });
  });

  it("Should create a new user", async () => {
    const password = "IamNazereWright080599";
    const userInfo = {
      email: email,
      password: password,
      givenName: "Nazzy",
      familyName: "Wright",
    };
    const response = await server.post("/api/users/create").send(userInfo);
    const isResponseEmpty = isObjectEmpty(response.body);
    assert(!isResponseEmpty);
    assert(response.body._id);
    assert(response.body.password);
    // assert that password was hashed
    const same = await bcrypt.compare(password, response.body.password);
    assert(same);
  });

  it("Should find a given user by an attribute", async () => {
    const response = await server.post("/api/users/retrieve").send({ email });
    const isResponseEmpty = isObjectEmpty(response.body);
    assert(!isResponseEmpty);
    assert(response.body._id);
  });

  it("Should find any user by their user id", async () => {});

  it("Should find a user by their Id and update their information", async () => {});

  it("delete a user from the system", async () => {});
});

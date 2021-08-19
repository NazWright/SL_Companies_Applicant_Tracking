const assert = require("assert");
const request = require("supertest");
const User = require("../../db-objects/User");
const app = require("../../index");
const bcrypt = require("bcrypt");

describe("Testing the user controller", () => {
  beforeEach(() => {
    User.deleteMany({}, (result, err) => {
      if (err) return err;
    });
  });

  it("Should create a new user", async () => {
    const password = "IamNazereWright080599";
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await request(app).post("/api/users").send({
      email: "nazwrightthedeveloper@gmail.com",
      password: hashedPassword,
      givenName: "Nazzy",
      familyName: "Wright",
      role: "Applicant",
      //parent: "6053a6dceab211d3ed6fe26c",
    });
    assert(Object.keys(response.body).length > 0);
    assert(response.body._id);
    assert(response.body.password);
    assert(await bcrypt.compare(hashedPassword, response.body.password));
  });

  it("Should find a given user by their supervisor Id", async () => {});

  it("Should find a user by their Id and update their information", async () => {});

  it("delete a user from the system", async () => {});
});

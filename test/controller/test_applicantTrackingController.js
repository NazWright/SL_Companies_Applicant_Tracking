const assert = require("assert");
const request = require("supertest");
const User = require("../../db-objects/User");
const app = require("../../index");
const bcrypt = require("bcrypt");
const { isObjectEmpty } = require("../../helpers/index");

describe("Testing applicant tracking controller", () => {
  let newUser;
  const server = request(app);
  var userId;

  before(async () => {
    try {
      newUser = await User.create({
        email: "nazzywright@gmail.com",
        givenName: "Nazere",
        familyName: "Wright",
      });
      if (!newUser._id) {
        throw new Error("User was not created successfully");
      }
    } catch (error) {
      console.error(error.message);
    }
  });

  it("Should create a job listing", () => {
    const response = await server.post("/api/jobs/create").send({});
  });
});

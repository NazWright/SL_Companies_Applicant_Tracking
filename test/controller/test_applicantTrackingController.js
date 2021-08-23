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
      userId = newUser._id;
    } catch (error) {
      console.error(error.message);
    }
  });

  it("Should create a job listing", async () => {
    // pay header for the job will have to have the lowest min between the two and the highest max
    const morningShift = {
      name: "1st",
      compensation: {
        min: 10,
        max: 10.75,
        type: "Hourly",
      },
      startTime: "7:30 AM",
      endTime: "3:30 PM",
    };
    const eveningShift = {
      name: "2nd",
      compensation: {
        min: 10,
        max: 10.75,
        type: "Hourly",
      },
      startTime: "8:30 AM",
      endTime: "4:30 PM",
    };
    const availWeekends = true;
    const availHolidays = true;
    const availOvertime = true;
    const avail8To12HR = true;
    const tasks = {};
    const skills = {};
    const responsibilities = [];
    const equipmentNeeded = [];
    const location = "Durham, NC";
    const jobType = "Manufacturing";
    const preferredRadius = 0;
    const publishedDate = Date.now();
    const response = await server.post("/api/jobs/create").send({
      publisherId: userId,
      title: "Furniture Frame Builder",
      shifts: [morningShift, eveningShift],
      schedule: {
        avail8To12HR,
        availHolidays,
        availOvertime,
        availWeekends,
      },
      tasks,
      skills,
      responsibilities,
      equipmentNeeded,
      location,
      publishedDate,
      jobType,
      preferredRadius,
      expiresOn: new Date(2021, 8, 30),
    });
    // assert that the response and the created date are the same
    assert(response.body._id && response.body.publishedDate);
  });
});

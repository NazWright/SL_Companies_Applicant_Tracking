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
    // pay header for the job will have to have the lowest min between the two and the highest max
    const morningShift = {name:'1st', pay:{}, startTime: '', endTime: ''}
    const eveningShift = {name:'2nd', pay:{}, startTime: '', endTime: ''}
    const availWeekends, availHolidays, availOvertime, avail8To12HR = true; 
    const tasks, skills = {};
    const responsibilites, equipmentNeeded = [];
    const location, jobType = "";
    const preferredRadius = 0;
    const publishedDate = Date.now();
    const response = await server.post("/api/jobs/create").send({
        title: "Furniture Frame Builder",
        shifts: [morningShift, eveningShift],
        schedule: {
            avail8To12HR,
            availHolidays,
            availOvertime,
            availWeekends
       },
       tasks,
       skills,
       responsibilites,
       equipmentNeeded,
       location,
       publishedDate,
       jobType,
       preferredRadius,
    });
    // assert that the response and the created date are the same
    assert(response.body._id && response.body.publishedDate);
  });
});

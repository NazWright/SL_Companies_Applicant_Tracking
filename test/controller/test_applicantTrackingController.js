const assert = require("assert");
const request = require("supertest");
const User = require("../../db-objects/User");
const app = require("../../index");
const bcrypt = require("bcrypt");
const { isObjectEmpty } = require("../../helpers/index");
const Job = require("../../db-objects/Job");

describe("Testing applicant tracking controller", () => {
  let newUser;
  const server = request(app);
  var userId;
  var jobId;

  before(() => {
    Job.deleteMany({}, (err, result) => {
      if (err) console.error(err);
    });
  });

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
    jobId = response.body._id;
  });

  it("Finds all the jobs by a given publisher", async () => {
    const response = await server
      .post("/api/jobs/find")
      .send({ publisherId: userId });
    assert(response.status === 200);
    assert(response.body);
    const isAnArray = Array.isArray(response.body);
    assert(isAnArray && response.body.length > 0);
    assert(response.body[0]._id && response.body[0].publishedDate);
  });

  it("Finds all the jobs on that expire on this given date", async () => {
    const response = await server
      .post("/api/jobs/find")
      .send({ expiresOn: new Date(2021, 8, 30) });
    assert(response.status === 200);
    assert(response.body);
    const isAnArray = Array.isArray(response.body);
    assert(isAnArray);
    const arrayHasItems = response.body.length > 0;
    assert(arrayHasItems);
    assert(response.body[0]._id && response.body[0].publishedDate);
  });

  it("returns an error when no jobs are found by the criteria", async () => {
    const response = await server
      .post("/api/jobs/find")
      .send({ expiresOn: new Date(2021, 9, 30) });
    assert(response.status === 404);
    assert(response.body);
    assert(response.body.error);
    const errorText = "No jobs found with given parameters.";
    const isCorrectError = errorText === response.body.error;
    assert(isCorrectError);
  });

  it("Finds a job by its Id and updates the job", async () => {
    // details for desired update.
    const updateMask = { expiresOn: new Date(2022, 11, 30) };
    const requestBody = { jobId, updateMask };
    const response = await server.put("/api/jobs/update").send(requestBody);
    assert(response.body._id);
    assert(response.status === 200);
  });

  it("Throws an error by passing a fake job id", async () => {
    // details for desired update.
    const updateMask = { expiresOn: new Date(2022, 11, 30) };
    const fakeJobId = "Fake Id put here";
    const requestBody = { jobId: fakeJobId, updateMask };
    const response = await server.put("/api/jobs/update").send(requestBody);
    assert(response.body.error);
    assert(response.status === 500);
  });

  it("delete a job from the system", async () => {
    const response = await server.delete(`/api/jobs/delete/${jobId}`);
    const isResponseEmpty = isObjectEmpty(response.body);
    assert(!isResponseEmpty);
    assert(response.body._id && response.body.publishedDate);
    assert(response.status === 200);
  });
});

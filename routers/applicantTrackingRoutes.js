// Microservice module for applicant tracking purposes
// posting jobs, application process, recruiter workflows
// interviews, managing job listings, managing applications
const applicantTrackingController = require("../controller/applicantTrackingController");

module.exports = (app, passport) => {
  // job postings
  app.post("/api/jobs/create", applicantTrackingController.createJob);

  app.post("/api/jobs/find", applicantTrackingController.getJobsByFilter);

  app.get("/api/jobs/:jobId", (req, res) => {});

  app.put("/api/jobs/update", applicantTrackingController.updateJob);

  // return a list of jobs given some criteria from user.
  app.post("/api/jobs/list", (req, res) => {});

  app.delete("/api/jobs/delete/:jobId", applicantTrackingController.deleteJob);
};

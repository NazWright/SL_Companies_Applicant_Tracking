// Microservice module for applicant tracking purposes
// posting jobs, application process, recruiter workflows
// interviews, managing job listings, managing applications

module.exports = (app, passport) => {
  // job postings
  app.post("/api/jobs", (req, res) => {});

  app.get("/api/jobs/:jobId", (req, res) => {});

  app.put("/api/jobs/:jobId", (req, res) => {});

  // return a list of jobs given some criteria from user.
  app.post("/api/jobs/list", (req, res) => {});
};

const joi = require("joi");
const { jobCreationSchema, jobRetrievalSchema, jobUpdateSchema } =
  require("../model/Job")(joi);
const mongoose = require("mongoose");
const Job = mongoose.model("jobs");

module.exports = {
  // jobs
  async createJob(req, res) {
    try {
      const validationObject = jobCreationSchema.validate(req.body);
      if (validationObject.error) {
        return res
          .status(400)
          .send({ error: validationObject.error.details[0].message });
      }
      const createdJob = await new Job({
        ...req.body,
      }).save();
      if (createdJob._id) return res.status(200).send(createdJob);
      throw new Error("Job could not be created. Please try again");
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },

  async getJobsByFilter(req, res) {
    try {
      const matchedJobs = await Job.find({ ...req.body });
      if (matchedJobs.length > 0) return res.status(200).send(matchedJobs);
      return res
        .status(404)
        .send({ error: "No jobs found with given parameters." });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },

  async updateJob(req, res) {
    try {
      const validationObject = jobUpdateSchema.validate(req.body);
      if (validationObject.error) {
        return res
          .status(400)
          .send({ error: validationObject.error.details[0].message });
      }
      const updatedJobs = await Job.findByIdAndUpdate(
        req.body.jobId,
        req.body.updateMask,
        { useFindAndModify: false }
      );

      if (updatedJobs._id) return res.status(200).send(updatedJobs);
      throw new Error("Job does not exist. Please check job Id");
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },

  async deleteJob(req, res) {
    try {
      if (!req.params.jobId) {
        return res.status(400).send({ error: "jobId is required" });
      }
      const deletedJob = await Job.findByIdAndDelete(req.params.jobId);

      if (deletedJob._id) return res.status(200).send(deletedJob);
      throw new Error("Job does not exist. Please check job Id");
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};
// applicant tracking module

// jobs

// applications

// workflow

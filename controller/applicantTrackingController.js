const joi = require("joi");
const { jobCreationSchema } = require("../model/Job")(joi);
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
};
// applicant tracking module

// jobs

// applications

// workflow

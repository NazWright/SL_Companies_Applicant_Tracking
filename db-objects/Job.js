const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  publisherId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shifts: {
    type: [Object],
    required: true,
  },
  tasks: {
    type: Object,
    required: true,
  },
  skills: {
    type: Object,
    required: true,
  },
  schedule: {
    type: Object,
    required: true,
  },
  responsibilities: {
    type: [String],
    required: false,
  },
  equipmentNeeded: {
    type: [String],
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  preferredRadius: {
    type: Number,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  expiresOn: {
    type: Date,
    required: true,
  },
});

const Job = mongoose.model("jobs", JobSchema);
module.exports = Job;

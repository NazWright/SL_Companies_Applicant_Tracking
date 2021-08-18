const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  publisherId: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("jobs", JobSchema);
module.exports = Job;

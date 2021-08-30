const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
  applicantId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  entries: {
    type: [Object],
    required: true,
  },
});

const Application = mongoose.model("applications", applicationSchema);

module.exports = Application;

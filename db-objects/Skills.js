const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillsSchema = new Schema({
  jobId: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
});

const Skills = mongoose.model("skills", skillsSchema);
module.exports = Skills;

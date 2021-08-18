const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  googleCompanyName: {
    type: String,
    required: true,
  },
  employerId: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("companies", companySchema);
module.exports = Company;

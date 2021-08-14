const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
  },
  familyName: {
    type: String,
    required: [true, "Family name property is required"],
  },
  givenName: {
    type: String,
    required: [true, "Given name property is required"],
  },
  role: {
    type: String,
    required: false,
  },
  // userMeta = userType, userIdType, userReqId
  userMeta: {
    type: Object,
    required: false,
  },
  capabilites: {
    type: [String],
    required: false,
  },
  email: {
    type: String,
    required: [true, "Email property is required"],
  },
  password: {
    type: String,
    required: false,
  },
  websiteURL: {
    type: String,
    required: false,
  },
  supervisor: {
    type: String,
    required: false,
  },
  address: {
    type: Object,
    required: false,
  },
  experience: {
    type: Object,
    required: false,
  },
  education: {
    type: Object,
    required: false,
  },
  jobProfile: {
    type: Object,
    required: false,
  },
  userCreated: {
    type: Date,
    required: false,
  },
  userUpdated: {
    type: Date,
    required: false,
  },
  userLogo: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const joi = require("joi");
const { userCreationSchema, userRetrievalSchema } =
  require("../model/User/User")(joi);
const hashSalt = 10;

module.exports = {
  async createUser(req, res) {
    try {
      var hashedPassword;
      const validationObject = userCreationSchema.validate(req.body);
      if (validationObject.error) {
        return res.status(400).send({ error: validationObject.error });
      }
      if (req.body.password) {
        hashedPassword = await bcrypt.hash(req.body.password, hashSalt);
      }
      const createdUser = await new User({
        ...req.body,
        password: hashedPassword,
      }).save();
      if (createdUser._id) return res.status(200).send(createdUser);
      throw new Error("User could not be created. Please try again");
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },

  async getUserByFilter(req, res) {
    try {
      const validationObject = userRetrievalSchema.validate(req.body);
      if (validationObject.error) {
        return res.status(400).send({ error: validationObject.error });
      }
      const matchedUser = await User.findOne(req.body);
      if (matchedUser._id) return res.status(200).send(matchedUser);
      return res.status(404).send({ error: "User not found" });
    } catch {
      return res.status(500).send({ error: error.message });
    }
  },
};

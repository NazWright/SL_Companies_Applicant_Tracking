const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = {
  async createUser(req, res) {
    var hashedPassword;
    try {
      if (!req.body.familyName && !req.body.givenName && !req.body.email) {
        return res.status(400).send({
          error: "Request must include: familyName, givenName & email",
        });
      } else {
        if (req.body.password) {
          hashedPassword = await bcrypt.hash(req.body.password, 10);
        }
        const newUser = await User.create({
          password: hashedPassword,
          email: req.body.email,
          familyName: req.body.familyName,
          givenName: req.body.givenName,
        });
        if (newUser) return res.status(200).send(newUser);
        throw new Error("User cannot be created.");
      }
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  },
};

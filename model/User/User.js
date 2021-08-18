module.exports = (joi) => {
  return joi.object.keys({
    googleId: joi.string().min(3).max(45),
    givenName: joi.string().min(3).max(45).required(),
    familyName: joi.string().min(3).max(45).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(20),
  });
};

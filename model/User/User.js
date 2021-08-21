module.exports = (joi) => {
  const userCreationSchema = joi.object().keys({
    googleId: joi.string().min(3).max(45),
    givenName: joi.string().min(3).max(45).required(),
    familyName: joi.string().min(3).max(45).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8),
  });

  const userRetrievalSchema = joi.object().keys({
    googleId: joi.string().min(3).max(45),
    givenName: joi.string().min(3).max(45),
    familyName: joi.string().min(3).max(45),
    email: joi.string().email(),
    password: joi.string().min(8),
  });

  return {
    userCreationSchema,
    userRetrievalSchema,
  };
};

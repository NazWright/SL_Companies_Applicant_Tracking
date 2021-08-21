module.exports = (joi) => {
  const commmonProperties = {
    _id: joi.string().min(3).max(45),
    googleId: joi.string().min(3).max(45),
    givenName: joi.string().min(3).max(45),
    familyName: joi.string().min(3).max(45),
    email: joi.string().email(),
    password: joi.string().min(8),
  };

  const userCreationSchema = joi.object().keys({
    googleId: commmonProperties.googleId,
    givenName: commmonProperties.givenName.required(),
    familyName: commmonProperties.familyName.required(),
    email: commmonProperties.email.required(),
    password: commmonProperties.password,
  });

  const userRetrievalSchema = joi.object().keys({
    ...commmonProperties,
  });

  const userUpdateSchema = joi.object().keys({
    ...commmonProperties,
    _id: commmonProperties._id.required(),
  });

  const userDeleteSchema = {
    _id: commmonProperties._id.required(),
  };

  return {
    userCreationSchema,
    userRetrievalSchema,
    userUpdateSchema,
    userDeleteSchema,
  };
};

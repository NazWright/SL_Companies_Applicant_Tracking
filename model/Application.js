module.exports = (joi) => {
  const applicationCreationSchema = joi.object().keys({
    applicantId: joi.string().required(),
    jobId: joi.string().required(),
    entries: joi.array().items().required(),
  });
};

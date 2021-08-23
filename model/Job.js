//onst { requireAllProps } = require("./index");

module.exports = (joi) => {
  const compensationSchema = joi.object().keys({
    min: joi.number().required(),
    max: joi.number().required(),
    type: joi.string().min(3).max(45).required(),
  });

  const shiftsSchema = joi.object().keys({
    name: joi.string().min(3).max(45).required(),
    startTime: joi.string().required(),
    endTime: joi.string().required(),
    compensation: compensationSchema.required(),
  });

  const scheduleSchema = joi.object().keys({
    availWeekends: joi.boolean().required(),
    availHolidays: joi.boolean().required(),
    availOvertime: joi.boolean().required(),
    avail8To12HR: joi.boolean().required(),
  });

  const commonProperties = {
    publisherId: joi.string().min(3).max(45),
    title: joi.string().min(3).max(45),
    shifts: joi.array().items(shiftsSchema),
    schedule: scheduleSchema,
    tasks: joi.object(),
    skills: joi.object(),
    responsibilities: joi.array().items(joi.string()),
    equipmentNeeded: joi.array().items(joi.string()),
    location: joi.string().min(3).max(45),
    jobType: joi.string().min(3).max(45),
    preferredRadius: joi.number(),
    publishedDate: joi.date(),
    expiresOn: joi.date(),
  };

  // iteratively requires all properties from a given joi schema.
  const requireAllProps = function (properties) {
    try {
      const isEmpty = isObjectEmpty(properties);
      if (isEmpty) throw new Error("The parameter: properties is empty.");
      const allPropsRequired = {};
      for (property in properties) {
        allPropsRequired[property.name] = property.value.required();
      }
      return allPropsRequired;
    } catch (error) {
      console.error(error.message);
    }
  };

  const requiredProps = requireAllProps(commonProperties);
  const jobCreationSchema = joi.object().keys({
    publisherId: joi.string().min(3).max(45).required(),
    title: joi.string().min(3).max(45).required(),
    shifts: joi.array().items(shiftsSchema).required(),
    schedule: scheduleSchema.required(),
    tasks: joi.object().required(),
    skills: joi.object().required(),
    responsibilities: joi.array().items(joi.string()).required(),
    equipmentNeeded: joi.array().items(joi.string()),
    location: joi.string().min(3).max(45).required(),
    jobType: joi.string().min(3).max(45).required(),
    preferredRadius: joi.number(),
    publishedDate: joi.date().required(),
    expiresOn: joi.date(),
  });

  return {
    jobCreationSchema,
  };
};

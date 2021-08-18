module.exports = function (queryParamNames) {
  return (req, res, next) => {
    if (!Array.isArray(queryParamNames)) {
      return res
        .status(400)
        .send({ error: "Expected Array of query params. See documentation: " });
    }
    const queryParams = { ...req.query } || false;
    const paramNames = Object.keys(queryParams);

    if (queryParamNames.every((key) => paramNames.includes(key))) {
      next();
    } else {
      return res.status(400).send({ error: "param not specified" });
    }
  };
};

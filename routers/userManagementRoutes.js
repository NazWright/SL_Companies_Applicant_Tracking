const userManagementController = require("../controller/userManagementController");

module.exports = (app) => {
  app.post("/api/users/create", userManagementController.createUser);

  app.post("/api/users/retrieve", userManagementController.getUserByFilter);
};

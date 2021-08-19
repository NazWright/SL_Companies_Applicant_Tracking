const userManagementController = require("../controller/userManagementController");

module.exports = (app) => {
  app.post("/api/users", userManagementController.createUser);
};

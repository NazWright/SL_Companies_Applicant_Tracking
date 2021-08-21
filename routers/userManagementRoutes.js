const userManagementController = require("../controller/userManagementController");

module.exports = (app) => {
  app.post("/api/users/create", userManagementController.createUser);

  app.post("/api/users/retrieve", userManagementController.getUserByFilter);

  app.put("/api/users/update", userManagementController.updateUser);

  app.delete("/api/users/delete/:userId", userManagementController.deleteUser);
};

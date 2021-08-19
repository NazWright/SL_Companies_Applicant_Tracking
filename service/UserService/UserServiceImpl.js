module.exports = {
  async authenticateUser(Users, userData) {
    try {
      // take the data object pass in and validate through joi model
      // ask them to pass through a function that takes the users and how to find a user.
      // run the validation and upon success, run the function.
      return (await Users.findOne(userData)) || false;
    } catch (error) {
      console.error(error);
      return { error };
    }
  },
};

module.exports = {
  async authenticateUser(Users, userData) {
    try {
      return (await Users.findOne(userData)) || false;
    } catch (error) {
      console.error(error);
      return { error };
    }
  },
};

const User = require("../models/user");

const createUser = async (data) => {
  try {
    const response = await User.create(data);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getUserEmail = async (email) => {
  try {
    const response = await User.findOne({
      email: email,
    });

    if (!response) {
      throw {
        err: "No user found for the given email",
        code: 404,
      };
    }
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw {
        err: "No user found for the given id",
        code: 404,
      };
    }
    return user;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

module.exports = {
  createUser,
  getUserEmail,
  getUserById,
};

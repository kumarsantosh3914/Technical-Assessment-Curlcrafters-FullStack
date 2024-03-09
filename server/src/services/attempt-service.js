const Attempt = require("../models/attempt");

const createAttempt = async (data) => {
  try {
    const response = await Attempt.create(data);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getAllAttempts = async () => {
  try {
    const response = await Attempt.find();
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getAllAttemptById = async (id) => {
  try {
    const response = await Attempt.findById(id);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const updateAttemptById = async (id, data) => {
  try {
    const response = await Attempt.findByIdAndUpdate(id, data, { new: true });
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const deleteAttemptById = async (id) => {
  try {
    const response = await Attempt.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

module.exports = {
  createAttempt,
  getAllAttemptById,
  getAllAttempts,
  updateAttemptById,
  deleteAttemptById,
};

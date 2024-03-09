const Quiz = require("../models/quiz");

const createQuiz = async (data) => {
  try {
    console.log("service ", data);
    const response = await Quiz.create(data);
    return response;
  } catch (error) {
    throw error;
  }
};

const getAllQuizzes = async () => {
  try {
    const response = await Quiz.find()
      .populate("authorId")
      .populate("questions");
    return response;
  } catch (error) {
    throw error;
  }
};

const getQuizById = async (id) => {
  try {
    const response = await Quiz.findById(id);
    return response;
  } catch (error) {
    throw error;
  }
};

const updateQuizById = async (id, data) => {
  try {
    const response = await Quiz.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const deleteQuizById = async (id) => {
  try {
    const response = await Quiz.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
};

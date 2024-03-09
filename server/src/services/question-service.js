const Question = require("../models/question");

const createQuestion = async (data) => {
  try {
    const response = await Question.create(data);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getAllQuestions = async () => {
  try {
    const response = await Question.find()
      .populate("quizId")
      .populate("authorId");
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const getQuestionById = async (id) => {
  try {
    const response = await Question.findById(id)
      .populate("quizId")
      .populate("authorId");
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const updateQuestionById = async (id, data) => {
  try {
    const response = await Question.findByIdAndUpdate(
      id,
      { $set: { title, answers, options } },
      { new: true }
    );
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

const deleteQuestionById = async (id) => {
  try {
    const response = await Question.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("Something went wrong in service layer");
    throw error;
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
};

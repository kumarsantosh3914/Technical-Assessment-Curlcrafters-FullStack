const quizService = require("../services/quiz-service");

const createQuiz = async (req, res) => {
  try {
    const response = await quizService.createQuiz(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      message: "Successfully created a quiz",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const response = await quizService.getAllQuizzes();
    return res.status(200).json({
      message: "Successfully fetched all quizzes",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

const getQuizById = async (req, res) => {
  try {
    const response = await quizService.getQuizById(req.params.id);
    return res.status(200).json({
      message: "Successfully fetched the quiz by id",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

const updateQuizById = async (req, res) => {
  try {
    const response = await quizService.updateQuizById(req.params.id, req.body);
    return res.status(200).json({
      message: "Successfully updated the quiz",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

const deleteQuizById = async (req, res) => {
  try {
    const response = await quizService.deleteQuizById(req.params.id);
    return res.status(200).json({
      message: "Successfully delete the quiz",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
};

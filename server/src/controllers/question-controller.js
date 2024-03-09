const questionService = require("../services/question-service");

const createQuestion = async (req, res) => {
  try {
    const response = await questionService.createQuestion(req.body);
    return res.status(201).json({
      message: "Successfully created a question",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Somthing went wrong in controller layer",
      data: {},
      success: false,
      err: err,
    });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const response = await questionService.getAllQuestions();
    return res.status(201).json({
      message: "Successfully fetched all questions",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Somthing went wrong in controller layer",
      data: {},
      success: false,
      err: err,
    });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const response = await questionService.getQuestionById();
    return res.status(201).json({
      message: "Successfully fetched question by id",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Somthing went wrong in controller layer",
      data: {},
      success: false,
      err: err,
    });
  }
};

const updateQuestionById = async (req, res) => {
  try {
    const response = await questionService.updateQuestionById(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      message: "Successfully update a question",
      data: response,
      success: true,
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Somthing went wrong in controller layer",
      data: {},
      success: false,
      err: err,
    });
  }
};

const deleteQuestionById = async (req, res) => {
  try {
    const response = await questionService.deleteQuestionById(req.params.id);
    return res.status(201).json({
      message: "Successfully delete a question",
      data: response,
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Somthing went wrong in controller layer",
      data: {},
      success: false,
      err: err,
    });
  }
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
};

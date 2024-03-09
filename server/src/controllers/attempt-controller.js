const attemptService = require("../services/attempt-service");

const createAttempt = async (req, res) => {
  try {
    const response = await attemptService.createAttempt(req.body);
    return res.status(201).json({
      message: "Successfully attempt a question",
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

const getAllAttempts = async (req, res) => {
  try {
    const response = await attemptService.getAllAttempts();
    return res.status(201).json({
      message: "Successfully fetched all attempt",
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

const getAllAttemptById = async (req, res) => {
  try {
    const response = await attemptService.getAllAttemptById();
    return res.status(201).json({
      message: "Successfully fetched attempt by id",
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

const updateAttemptById = async (req, res) => {
  try {
    const response = await attemptService.updateAttemptById(req.body);
    return res.status(201).json({
      message: "Successfully update a attempt",
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

const deleteAttemptById = async (req, res) => {
  try {
    const response = await attemptService.deleteAttemptById(req.body);
    return res.status(201).json({
      message: "Successfully delete a attempt",
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
  createAttempt,
  getAllAttempts,
  getAllAttemptById,
  updateAttemptById,
  deleteAttemptById,
};

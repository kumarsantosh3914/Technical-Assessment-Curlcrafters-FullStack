const express = require("express");
const userController = require("../../controllers/user-controller");
const quizController = require("../../controllers/quiz-controller");
const questionController = require("../../controllers/question-controller");
const attemptController = require("../../controllers/attempt-controller");

const router = express.Router();

// quiz routes
router.post("/quizes", quizController.createQuiz);
router.get("/quizes", quizController.getAllQuizzes);
router.get("/quizes/:id", quizController.getQuizById);
router.delete("/quizes/:id", quizController.deleteQuizById);
router.patch("/quizes/:id", quizController.updateQuizById);

// question routes
router.post("/questions", questionController.createQuestion);
router.get("/questions", questionController.getAllQuestions);
router.get("/questions/:id", questionController.getQuestionById);
router.delete("/questions/:id", questionController.deleteQuestionById);
router.patch("/questions/:id", questionController.updateQuestionById);

// attempt routes
router.post("/attempts", attemptController.createAttempt);
router.get("/attempts", attemptController.getAllAttempts);
router.get("/attempts/:id", attemptController.getAllAttemptById);
router.delete("/attempts/:id", attemptController.deleteAttemptById);
router.patch("/attempts/:id", attemptController.updateAttemptById);

// authentication
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;

const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    playerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    questions: [
      {
        questionsId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
        },
        answers: [{ type: String }],
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Attempt = mongoose.model("Attempt", attemptSchema);

module.exports = Attempt;

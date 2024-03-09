const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://localhost/quiz_Dev");
};

module.exports = connect;

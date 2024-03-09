const userService = require("../services/user-service");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");

// Sign up a user
const signup = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
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

// Sign in a user
const signin = async (req, res) => {
  try {
    const user = await userService.getUserEmail(req.body.email);
    if (!user) {
      throw {
        message: "User not found with the given email",
        code: 404,
      };
    }

    const isValidPassword = await user.isValidPassword(req.body.password);

    if (!isValidPassword) {
      throw {
        message: "Invalid password for the given email",
        code: 401,
      };
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      success: true,
      message: "User successfully logged in",
      data: token,
      err: {},
    });
  } catch (err) {
    return res.status(err.code || 500).json({
      success: false,
      message: err.message || "Something went wrong in controller layer",
      data: {},
      err: err,
    });
  }
};

module.exports = {
  signup,
  signin,
};

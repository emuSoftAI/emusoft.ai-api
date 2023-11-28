const User = require("../models/User");

// * Authentication controller
exports.login = async (req, res, next) => {
  try {
    // * Login existing user, if exists
  } catch (e) {
    // * Catch an error
    next(e);
  }
};

exports.signup = async (req, res, next) => {
  try {
    // * Signup a user

    const user = await User.create({
      // username, emu id, password, etc...
    });
  } catch (e) {
    next(e);
  }
};

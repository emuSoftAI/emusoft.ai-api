const User = require("../models/User");

// * User controller for CRUD operations
exports.getUsers = async (req, res, next) => {
  try {
    // * Get users
  } catch (e) {
    // * Catch an error
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    // * Get a specific user with unique ID (_id)
  } catch (e) {
    next(e);
  }
};

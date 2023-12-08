const Activity = require("../models/Activity");

exports.getActivities = async (req, res, next) => {
  // * Get all activities from MongoDB
};

exports.getActivity = async (req, res, next) => {
  // * Get specific activity with ID from MongoDB
  const { id } = req.params;

  // ...
};

exports.createActivity = async (req, res, next) => {
  // * Createa an activity with mongoose schema properties
  // HINT: Get the properties from req.body
  // e.g const { a, b, c } = req.body;
};

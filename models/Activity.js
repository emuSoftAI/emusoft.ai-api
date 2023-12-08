const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  // * Create an Activity Schema with these properties
  // Title, description, images (Array)
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

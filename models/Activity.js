const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  images: String
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

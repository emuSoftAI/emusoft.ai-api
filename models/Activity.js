const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Activity title is required."],
    trim: true,
  },

  desription: {
    type: String,
    required: [true, "Activity description is required."],
  },

  images: [
    {
      type: String,
      trim: true,
    },
  ],

  date: {
    type: Date,
    required: [true, "Activity date is required."],
  },
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Activity title is required."],
      trim: true,
    },

    desription: {
      type: String,
      required: [true, "Activity description is required."],
      trim: true,
    },

    thumbnail: {
      type: String,
      required: [true, "Activity must have a thumbnail."],
      trim: true,
    },

    images: [
      {
        type: String,
        trim: true,
      },
    ],

    location: {
      type: String,
      required: [true, "The activity must have a location."],
    },

    date: {
      type: Date,
      required: [true, "Activity date is required."],
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

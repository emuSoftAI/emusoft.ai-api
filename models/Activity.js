const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Activity title is required."],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Activity description is required."],
      trim: true,
    },

    thumbnail: {
      source: {
        type: String,
        required: [true, "Activity thumbnail is required."],
      },

      size: {
        width: {
          type: Number,
          required: [true, "Thumbnail size is required."],
        },

        height: {
          type: Number,
          required: [true, "Thumbnail size is required."],
        },
      },
    },

    images: [
      {
        source: {
          type: String,
          required: [true, "Activity thumbnail is required."],
        },

        size: {
          width: {
            type: Number,
            required: [true, "Image size is required."],
          },

          height: {
            type: Number,
            required: [true, "Image size is required."],
          },
        },
      },
    ],

    documentation: {
      title: {
        type: String,
        required: [true, "An activity title is required."],
      },

      description: {
        type: String,
        required: [true, "An activity description is required."],
      },

      keywords: {
        type: [String],
        required: [true, "An activity's must have a few keywords."],
      },

      headings: [
        {
          sub_title: {
            type: String,
            trim: true,
          },

          paragraph: {
            type: String,
            trim: true,
          },

          code: {
            type: String,
            trim: true,
          },

          images: {
            type: String,
            trim: true,
          },
        },
      ],
    },

    location: {
      type: String,
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

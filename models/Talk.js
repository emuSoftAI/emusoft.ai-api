const mongoose = require("mongoose");

const talkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tutorial title is required."],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Tutorial description is required."],
      trim: true,
    },

    thumbnail: {
      type: String,
      required: [true, "Tutorial must have a thumbnail."],
      trim: true,
    },

    images: [
      {
        type: String,
      },
    ],

    talkers: [
      {
        name: {
          type: String,
          required: [true, "The talker's name is required."],
        },

        title: {
          type: String,
          required: ["The talker's title is required."],
        },

        company: {
          type: String,
        },

        links: {
          linkedin: {
            type: String,
            trim: true,
          },

          github: {
            type: String,
            trim: true,
          },

          twitter: {
            type: String,
            trim: true,
          },

          website: {
            type: String,
            trim: true,
          },

          medium: {
            type: String,
            trim: true,
          },
        },
      },
    ],

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

const Talk = mongoose.model("Talk", talkSchema);

module.exports = Talk;

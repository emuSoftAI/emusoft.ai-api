const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
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

    instructors: [
      {
        firstname: {
          type: String,
          required: [true, "The instructor's name is required."],
          trim: true,
        },

        lastname: {
          type: String,
          required: [true, "The instructor's lastname is required."],
          trim: true,
        },

        title: {
          type: String,
          required: ["The instructor's title is required."],
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

    languages: [
      {
        type: String,
        requied: [true, "The tutorial language is required."],
        trim: true,
      },
    ],

    location: {
      type: String,
      required: [true, "The tutorial must have a location."],
    },

    date: {
      type: Date,
      required: [true, "Tutorial date is required."],
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;

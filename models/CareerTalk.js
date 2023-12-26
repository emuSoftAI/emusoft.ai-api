const mongoose = require("mongoose");

const careerTalkSchema = new mongoose.Schema({
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
      firstname: {
        type: String,
        required: [true, "The talker's name is required."],
        trim: true,
      },

      lastname: {
        type: String,
        required: [true, "The talker's lastname is required."],
        trim: true,
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
});

const CareerTalk = mongoose.model("CareerTalk", careerTalkSchema);

module.exports = CareerTalk;

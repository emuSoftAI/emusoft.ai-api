const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    requried: [true, "A Director's name is required."],
    trim: true,
  },

  lastname: {
    type: String,
    required: [true, "A Director's lastname is required."],
    trim: true,
  },

  position: {
    type: String,
    required: [true, "The Director's position at the club is required."],
    trim: true,
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
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;

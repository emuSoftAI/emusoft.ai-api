const Tutorial = require("../models/Tutorial");

exports.getTutorials = async (req, res, next) => {
  try {
    const tutorials = await Tutorial.find();

    res.status(200).json({
      status: "success",
      data: {
        tutorials,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.createTutorial = async (req, res, next) => {
  try {
    const tutorial = await Tutorial.create({
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      images: req.body.images,
      instructors: req.body.instructors,
      languages: req.body.languages,
      location: req.body.location,
      date: req.body.date,
    });

    res.status(201).json({
      status: "success",
      message: "The document has been created succesfully.",
      data: {
        tutorial,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.getTutorial = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

exports.updateTutorial = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

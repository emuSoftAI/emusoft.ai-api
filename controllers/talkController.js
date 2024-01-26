const Talk = require("../models/Talk");

exports.getTalks = async (req, res, next) => {
  try {
    const talks = await Talk.find();

    res.status(200).json({
      status: "success",
      data: {
        talks,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.createTalk = async (req, res, next) => {
  try {
    const talk = await Talk.create({
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.body.thumbnail,
      images: req.body.images,
      talkers: req.body.talkers,
      location: req.body.location,
      date: req.body.date,
    });

    res.status(201).json({
      status: "success",
      message: "The document has been created successfully.",
      data: {
        talk,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.getTalk = async (req, res, next) => {};

exports.updateTalk = async (req, res, next) => {};

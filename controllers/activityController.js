const Activity = require("../models/Activity");
const AppError = require("../utils/AppError");

exports.getActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find();

    res.status(200).json({
      status: "success",
      results: activities.length,
      data: {
        activities,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.createActivity = async (req, res, next) => {
  try {
    const { title, description, thumbnail, images, location, date } = req.body;

    console.log(title, description, thumbnail, images, location, date);

    const activity = await Activity.create({
      title,
      description,
      thumbnail,
      images,
      location,
      date,
    });

    res.status(201).json({
      status: "success",
      message: "Activity has been created successfully!",
      data: {
        activity,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.getActivity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findById(id);

    if (!activity)
      return next(new AppError(404, "fail", "The activity not found."));

    res.status(200).json({
      status: "success",
      data: {
        activity,
      },
    });
  } catch (e) {
    next(e);
  }
};

exports.updateActivity = async (req, res, next) => {
  const { id } = req.params;

  const activity = await Activity.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    documentation: req.body.documentation,
  });

  res.status(200).json({
    status: "success",
    message: "The document has been updated successfully.",
    data: {
      actviity,
    },
  });
};

// exports.deleteActivity = async (req, res, next) => {};

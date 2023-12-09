"use strict";
const Activity = require("../models/Activity");
// Will be added 
//const logger = require("../utils/AppLog");

exports.getActivities = async (req, res, next) => {
  try {
    const allActivities = await Activity.find();

    if (!allActivities || allActivities.length === 0) {
      res.status(404).json({
        status: "not found.",
        message: "Activities not found.",
      });
    }
    res.status(200).json({
      status: "success",
      message: allActivities,
    });
  } catch (err) {
    res.status(500).json({
      status: "Server error 0x01.",
      message: "Activities not found.",
    });
    console.error(`Activities error: ${err}`);
  }

};

exports.getActivity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);

    if (!activity) {
      return res.status(404).json({
        status: "not found",
        message: "Activity not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: activity,
    });
  } catch (err) {
    res.status(400).json({
      status: "not found.",
      message: "Activity not found.",
    });
    console.error(`Activity request error: ${err}`)
  }

};

exports.createActivity = async (req, res, next) => {
  try {
    console.log("Incoming Request Body:", req.body);
    const {title, description, images} = req.body;
    if (!title || !description || !images) {
      return res.status(400).json({
        status: "wrong request",
        message: "Please fill the required data."
      });
    }
    let activity = new Activity({ title, description, images })
    await activity.save();

    console.info(`Activity created: \nID: ${activity._id}\nOther details: ${activity}`)
    return res.status(200).json({
      status: "success",
      message: activity._id,
    });
    
  } catch (err) {
    res.status(503).json({
      status: "Server error 0x2",
      message: "Please ask to administrator for this error."
    })

    console.error(`Activity create error: ${err}`);
  }
};

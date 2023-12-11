const Activity = require('../models/Activity');
const AppError = require('../utils/AppError');
const controller = {};

controller.createActivity = async (req, res, next) => {
  try {
    const data = req.body;
    // TODO: validate create data with joi  library
    const isValid = true;
    if (!isValid)
      return next(
        new AppError(400, 'error', 'please pass valid data to create activity')
      );

    await Activity.create(data);
    res.status(200).json({
      status: 'success',
      message: 'resource created',
    });
  } catch (e) {
    next(new AppError(500, 'error', 'interval sever error'));
  }
};

controller.getActivity = async (req, res, next) => {
  try {
    const id = req.params.id || '';
    const activity = await Activity.findById(id);
    if (!activity)
      return next(new AppError(404, 'error', 'resource not fnoud'));

    res.status(200).json({
      status: 'success',
      data: activity,
    });
  } catch (e) {
    next(new AppError(500, 'error', 'interval sever error'));
  }
};

controller.updateActivity = async (req, res, next) => {
  try {
    const id = req.params.id || '';
    const data = req.body;
    // TODO: validate update data with joi library
    const isValid = true;
    if (!isValid)
      return next(
        new AppError(400, 'error', 'please pass valid data to update activity')
      );

    await Activity.updateOne({ _id: id }, data);
    res.status(200).json({
      status: 'success',
      message: 'resource updated',
    });
  } catch (e) {
    next(new AppError(500, 'error', 'interval sever error'));
  }
};

controller.deleteActivity = async (req, res, next) => {
  try {
    const id = req.params.id || '';
    const { deletedCount } = await Activity.deleteOne({ _id: id });
    if (deletedCount == 0)
      return next(new AppError(404, 'error', 'resource not fnoud'));

    res.status(200).json({
      status: 'success',
      message: 'resource deleted',
    });
  } catch (e) {
    next(new AppError(500, 'error', 'interval sever error'));
  }
};

controller.getAllActivities = async (req, res, next) => {
  try {
    let { cursor, size } = req.query;
    cursor = cursor ? cursor : 1;
    size = size ? size : 10;
    const activities = await Activity.find({});
    res.status(200).json({
      status: 'success',
      data: activities,
    });
  } catch (e) {}
};

module.exports = controller;

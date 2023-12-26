const AppError = require("../utils/AppError");

exports.checkId = async (req, res, next) => {
  if (!req.params.id)
    return next(
      new AppError(403, "fail", "MongoDB Document Object Id is required.")
    );

  next(e);
};

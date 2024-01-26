const AppError = require("../utils/AppError");

exports.checkId = async (req, res, next) => {
  if (!req.params.id)
    return next(new AppError(403, "fail", "Not found any document."));

  next();
};

const AppError = require("../utils/AppError");

const duplicateError = (err) => {
  // ? Will be updated after schema design & data modeling

  return new AppError(409, "fail", err.message);
};

// ! 403: Forbidden
const validationError = (err) => {
  const messages = err.message.split(",");

  const message = messages
    .map((message, index) => message.split(":").at(index === 0 ? 2 : 1))
    .join("")
    .trim();

  return new AppError(403, "fail", message);
};

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    // ! Validation Error
    if (err.name === "ValidationError") err = validationError(err);
    // ! Duplicated (E11000) error
    if (err.code === 11000) err = duplicateError(err);
  }

  // * Get error status code, status from custom classs
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // * Catch error globally
  res.status(err.statusCode).json({
    status: err.satus,
    message: err.message,
  });

  next();
};

// * Custom class for catching error globally (OOP)
module.exports = class AppError extends Error {
  constructor(statusCode, status, message) {
    // * Inherit the messages
    super(message);

    // * Set properties
    this.statusCode = statusCode;
    this.status = status;

    // * Subscribing errors to the JavaScript Error Object
    Error.captureStackTrace(this, this.constructor);
  }
};

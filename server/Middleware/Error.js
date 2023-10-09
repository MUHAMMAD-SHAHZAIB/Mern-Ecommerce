const ErrorHandler = require("../Utils/ErrorHandler");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    // Check for the specific error type - CastError----ye error db ma id wrong karny per ye error huga.
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      err = new ErrorHandler(message, 400); // Create a custom error
    }

    res
      .status(err.statusCode)
      .json({ message: "Internal Server Error", error: err.message });
  }

  next(err);
};

module.exports = errorHandlerMiddleware;








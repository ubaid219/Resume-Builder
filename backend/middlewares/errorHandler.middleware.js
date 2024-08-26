
import { ApiResponse } from "../utils/ApiResponse.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const error = process.env.NODE_ENV === "development" ? err.stack : undefined;

  res.status(statusCode).json(new ApiResponse(statusCode, null, message, error));
};

export { errorHandler };

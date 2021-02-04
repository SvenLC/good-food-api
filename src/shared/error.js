export class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleNotFound = () => {
  throw new ErrorHandler(404, 'Not found');
};

export const handleError = (err, req, res, next) => {
  const statusCode = err?.statusCode || 500;
  const message = err?.message || 'Unhandled server error.';
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
  next();
};

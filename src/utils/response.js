const success = (res, data) => {
  res.status(200).json({
    success: true,
    data,
  });
};

const error = (res, message) => {
  res.status(400).json({
    success: false,
    message,
  });
};

module.exports = {
  success,
  error,
};

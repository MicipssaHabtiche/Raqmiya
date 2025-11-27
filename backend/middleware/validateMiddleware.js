module.exports = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    req.validated = value;
    next();
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
};

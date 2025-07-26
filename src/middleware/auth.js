const { verify } = require('../utils/token');

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const payload = verify(token);
  if (!payload) return res.status(401).json({ error: 'Unauthorized' });
  req.user = payload;
  next();
};

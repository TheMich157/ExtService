const allowed = (process.env.ALLOWED_IPS || '').split(',').filter(Boolean);

module.exports.ipWhitelist = (req, res, next) => {
  if (allowed.length && !allowed.includes(req.ip)) {
    return res.status(403).json({ error: 'IP not allowed' });
  }
  next();
};

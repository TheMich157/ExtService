const authService = require('../services/authService');

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  const token = await authService.login(username, password);
  if (!token) return res.status(401).json({ error: 'Invalid credentials' });
  res.json({ token });
};

module.exports.validate = (req, res) => {
  res.json({ user: req.user });
};

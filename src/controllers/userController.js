const userService = require('../services/userService');

module.exports.save = async (req, res) => {
  const user = await userService.saveUser(req.body);
  res.json(user);
};

module.exports.load = async (req, res) => {
  const user = await userService.loadUser(req.query.userId);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
};

module.exports.list = async (req, res) => {
  const users = await userService.listUsers();
  res.json(users);
};

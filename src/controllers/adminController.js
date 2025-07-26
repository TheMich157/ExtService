const adminService = require('../services/adminService');

module.exports.users = async (req, res) => {
  const users = await adminService.listUsers();
  res.json(users);
};

module.exports.ban = async (req, res) => {
  await adminService.banUser(req.params.id);
  res.json({ status: 'banned' });
};

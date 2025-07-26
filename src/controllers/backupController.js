const backupService = require('../services/backupService');

module.exports.create = async (req, res) => {
  const { userId, snapshot } = req.body;
  const b = await backupService.createBackup(userId, snapshot);
  res.json(b);
};

module.exports.list = async (req, res) => {
  const list = await backupService.listBackups(req.query.userId);
  res.json(list);
};

const migrationService = require('../services/migrationService');

module.exports.status = (req, res) => {
  res.json({ version: process.env.SCHEMA_VERSION });
};

module.exports.force = async (req, res) => {
  const user = await migrationService.migrateUser(req.body.userId);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
};

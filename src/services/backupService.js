const Backup = require('../models/Backup');

async function createBackup(userId, snapshot) {
  return Backup.create({ userId, snapshot, schemaVersion: snapshot.schemaVersion });
}

async function listBackups(userId) {
  return Backup.find({ userId }).sort({ createdAt: -1 });
}

module.exports = { createBackup, listBackups };

const History = require('../models/History');

async function listHistory(userId) {
  return History.find({ userId }).sort({ createdAt: -1 });
}

module.exports = { listHistory };

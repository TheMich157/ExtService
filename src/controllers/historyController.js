const historyService = require('../services/historyService');

module.exports.list = async (req, res) => {
  const list = await historyService.listHistory(req.query.userId);
  res.json(list);
};

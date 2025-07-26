const User = require('../models/UserData');
const History = require('../models/History');

async function saveUser(data) {
  const now = new Date();
  const user = await User.findOneAndUpdate({ userId: data.userId }, { ...data, updatedAt: now }, { upsert: true, new: true });
  await History.create({ userId: data.userId, data, schemaVersion: user.schemaVersion });
  return user;
}

async function loadUser(userId) {
  return User.findOne({ userId });
}

async function listUsers() {
  return User.find().limit(100);
}

module.exports = { saveUser, loadUser, listUsers };

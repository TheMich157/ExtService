const User = require('../models/UserData');
const migrate = require('../../migrations/migration');

async function migrateUser(userId) {
  const user = await User.findOne({ userId });
  if (!user) return null;
  return migrate(user);
}

module.exports = { migrateUser };

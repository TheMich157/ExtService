const User = require('../models/UserData');

async function banUser(id) {
  return User.deleteOne({ userId: id });
}

async function listUsers() {
  return User.find().select('userId');
}

module.exports = { banUser, listUsers };

const User = require('../models/UserData');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');

async function banUser(id) {
  return User.deleteOne({ userId: id });
}

async function listUsers() {
  return User.find().select('userId');
}

async function createAdmin(username, password, role = 'full') {
  const passwordHash = await bcrypt.hash(password, 10);
  return Admin.create({ username, passwordHash, role });
}

module.exports = { banUser, listUsers, createAdmin };
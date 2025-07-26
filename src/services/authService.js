const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const { sign } = require('../utils/token');

async function login(username, password) {
  const admin = await Admin.findOne({ username });
  if (!admin) return null;
  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) return null;
  return sign({ id: admin._id, role: admin.role });
}

module.exports = { login };

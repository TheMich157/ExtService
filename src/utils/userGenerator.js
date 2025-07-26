const crypto = require('crypto');

function generateUsername() {
  return 'user' + crypto.randomBytes(3).toString('hex');
}

function generatePassword() {
  return crypto.randomBytes(8).toString('base64url');
}

module.exports = { generateUsername, generatePassword };

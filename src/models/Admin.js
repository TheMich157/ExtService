const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['read', 'write', 'full'], default: 'read' }
});

module.exports = model('Admin', adminSchema);

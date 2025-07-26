const { Schema, model } = require('mongoose');

const userDataSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  coins: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  inventory: { type: [String], default: [] },
  schemaVersion: { type: Number, default: Number(process.env.SCHEMA_VERSION || 1) },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = model('UserData', userDataSchema);

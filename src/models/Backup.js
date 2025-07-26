const { Schema, model } = require('mongoose');

const backupSchema = new Schema({
  userId: { type: String, required: true },
  snapshot: { type: Schema.Types.Mixed, required: true },
  schemaVersion: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Backup', backupSchema);

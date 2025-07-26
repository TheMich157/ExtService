const { Schema, model } = require('mongoose');

const historySchema = new Schema({
  userId: { type: String, required: true },
  data: { type: Schema.Types.Mixed, required: true },
  schemaVersion: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('History', historySchema);

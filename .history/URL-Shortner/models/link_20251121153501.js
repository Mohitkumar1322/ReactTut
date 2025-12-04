// models/link.js
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, index: true }, // 6-8 chars
  target: { type: String, required: true }, // original URL
  clicks: { type: Number, default: 0 },
  lastClicked: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Link', linkSchema);

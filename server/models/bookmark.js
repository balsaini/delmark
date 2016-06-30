/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  isProtected: { type: Boolean, default: false },
  datePurchased: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  stars: { type: Number },
  tags: [{ type: String }],
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);

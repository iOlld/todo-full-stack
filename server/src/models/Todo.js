const { Schema, model } = require('mongoose');

const todoScema = new Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
  priority: { type: Number, required: true }
});

module.exports = model('todo', todoScema);

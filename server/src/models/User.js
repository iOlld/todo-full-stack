const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  nickName: { type: String },
  emalil: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  // todos: [Todo]
});

module.exports = model('user', userSchema);

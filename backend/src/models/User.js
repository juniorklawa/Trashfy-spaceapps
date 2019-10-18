const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  points: Number,
  profilePicture: String,
  type: String
});

module.exports = mongoose.model('User', UserSchema);
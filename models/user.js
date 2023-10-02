const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Other user properties
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Friend',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

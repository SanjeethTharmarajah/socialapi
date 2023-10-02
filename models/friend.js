const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // Other friend properties
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;

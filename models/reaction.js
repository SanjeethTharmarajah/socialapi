const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['like', 'love', 'dislike'], // Adjust the reaction types as needed
    required: true,
  },
  // Other reaction properties
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;

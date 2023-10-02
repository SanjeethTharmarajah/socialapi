const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  // Other thought properties
  reactions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reaction',
  }],
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

const Reaction = require('../models/reaction');

// Get a reaction by ID
exports.getReactionById = async (req, res) => {
  try {
    const reaction = await Reaction.findById(req.params.reactionId);
    if (!reaction) {
      return res.status(404).json({ error: 'Reaction not found' });
    }
    res.json(reaction);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a reaction by ID
exports.updateReaction = async (req, res) => {
  try {
    const updatedReaction = await Reaction.findByIdAndUpdate(
      req.params.reactionId,
      req.body,
      { new: true }
    );

    if (!updatedReaction) {
      return res.status(404).json({ error: 'Reaction not found' });
    }

    res.json(updatedReaction);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a reaction by ID
exports.deleteReaction = async (req, res) => {
  try {
    const deletedReaction = await Reaction.findByIdAndRemove(req.params.reactionId);

    if (!deletedReaction) {
      return res.status(404).json({ error: 'Reaction not found' });
    }

    res.json(deletedReaction);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

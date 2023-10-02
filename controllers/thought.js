const Thought = require('../models/thought');

// Get all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a thought by ID
exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(thought);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new thought
exports.createThought = async (req, res) => {
  try {
    const newThought = new Thought(req.body);
    const savedThought = await newThought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a thought by ID
exports.updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
      new: true,
    });

    if (!updatedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json(updatedThought);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a thought by ID
exports.deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndRemove(req.params.thoughtId);

    if (!deletedThought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    res.json(deletedThought);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get reactions for a thought
exports.getThoughtReactions = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate('reactions');
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }
    res.json(thought.reactions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a reaction to a thought
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    // Assuming you have a 'reactions' field in your thought schema
    thought.reactions.push(req.body.reactionId);
    await thought.save();

    res.json(thought.reactions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Remove a reaction from a thought
exports.removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ error: 'Thought not found' });
    }

    // Assuming you have a 'reactions' field in your thought schema
    thought.reactions = thought.reactions.filter(
      (reactionId) => reactionId.toString() !== req.params.reactionId
    );

    await thought.save();

    res.json(thought.reactions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

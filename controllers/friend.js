const Friend = require('../models/friend');

// Get a friend by ID
exports.getFriendById = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.friendId);
    if (!friend) {
      return res.status(404).json({ error: 'Friend not found' });
    }
    res.json(friend);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a friend by ID
exports.updateFriend = async (req, res) => {
  try {
    const updatedFriend = await Friend.findByIdAndUpdate(req.params.friendId, req.body, {
      new: true,
    });

    if (!updatedFriend) {
      return res.status(404).json({ error: 'Friend not found' });
    }

    res.json(updatedFriend);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a friend by ID
exports.deleteFriend = async (req, res) => {
  try {
    const deletedFriend = await Friend.findByIdAndRemove(req.params.friendId);

    if (!deletedFriend) {
      return res.status(404).json({ error: 'Friend not found' });
    }

    res.json(deletedFriend);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

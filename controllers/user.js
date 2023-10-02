const User = require('../models/user');
const Friend = require('../models/friend'); // Assuming you have a Friend model

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a user's friends
exports.getUserFriends = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('friends');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a friend to a user's friend list
exports.addFriend = async (req, res) => {
  try {
    // Ensure you have the friend's ID or create a new friend record
    let friend = await Friend.findOne({ name: req.body.name });
    if (!friend) {
      friend = new Friend({
        name: req.body.name, // Example: Friend's name
        // Other friend data...
      });
      await friend.save();
    }

    // Retrieve the user and update the friend list
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming you have a 'friends' field in your user schema
    user.friends.push(friend._id); // Assuming friend._id is the friend's ObjectId
    await user.save();

    // Return the updated user
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
// Remove a friend from a user's friend list
exports.removeFriend = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming you have a 'friends' field in your user schema
    user.friends = user.friends.filter((friendId) => friendId.toString() !== req.params.friendId.toString());

    await user.save();

    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

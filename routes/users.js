const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// GET all users
router.get('/', UserController.getAllUsers);

// GET a single user by ID
router.get('/:userId', UserController.getUserById);

// POST create a new user
router.post('/', UserController.createUser);

// PUT update a user by ID
router.put('/:userId', UserController.updateUser);

// DELETE a user by ID
router.delete('/:userId', UserController.deleteUser);

// GET a user's friends
router.get('/:userId/friends', UserController.getUserFriends);

// POST add a friend to a user's friend list
router.post('/:userId/friends', UserController.addFriend);

// DELETE remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', UserController.removeFriend);

module.exports = router;

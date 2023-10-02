const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friend');

// GET a single friend by ID
router.get('/:friendId', FriendController.getFriendById);

// PUT update a friend by ID
router.put('/:friendId', FriendController.updateFriend);

// DELETE a friend by ID
router.delete('/:friendId', FriendController.deleteFriend);

module.exports = router;

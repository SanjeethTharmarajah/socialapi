const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/reaction');

// GET a single reaction by ID
router.get('/:reactionId', ReactionController.getReactionById);

// PUT update a reaction by ID
router.put('/:reactionId', ReactionController.updateReaction);

// DELETE a reaction by ID
router.delete('/:reactionId', ReactionController.deleteReaction);

module.exports = router;

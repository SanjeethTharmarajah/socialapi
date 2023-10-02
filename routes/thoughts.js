const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/thought');

// GET all thoughts
router.get('/', ThoughtController.getAllThoughts);

// GET a single thought by ID
router.get('/:thoughtId', ThoughtController.getThoughtById);

// POST create a new thought
router.post('/', ThoughtController.createThought);

// PUT update a thought by ID
router.put('/:thoughtId', ThoughtController.updateThought);

// DELETE a thought by ID
router.delete('/:thoughtId', ThoughtController.deleteThought);

// GET reactions for a thought
router.get('/:thoughtId/reactions', ThoughtController.getThoughtReactions);

// POST add a reaction to a thought
router.post('/:thoughtId/reactions', ThoughtController.addReaction);

// DELETE remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', ThoughtController.removeReaction);

module.exports = router;

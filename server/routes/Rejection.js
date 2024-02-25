const express = require('express');
const router = express.Router();
const { Rejection } = require('../models'); // Assuming your model file is in the 'models' directory

// Create a new rejection
router.post('/', async (req, res) => {
  try {
    const rejection = await Rejection.create(req.body);
    res.status(201).json(rejection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all rejections
router.get('/', async (req, res) => {
  try {
    const rejections = await Rejection.findAll();
    res.json(rejections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single rejection
router.get('/:id', async (req, res) => {
  try {
    const rejection = await Rejection.findByPk(req.params.id);
    if (!rejection) {
      return res.status(404).json({ message: 'Rejection not found' });
    }
    res.json(rejection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a rejection
router.put('/:id', async (req, res) => {
  try {
    const rejection = await Rejection.findByPk(req.params.id);
    if (!rejection) {
      return res.status(404).json({ message: 'Rejection not found' });
    }
    await rejection.update(req.body);
    res.json(rejection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a rejection
router.delete('/:id', async (req, res) => {
  try {
    const rejection = await Rejection.findByPk(req.params.id);
    if (!rejection) {
      return res.status(404).json({ message: 'Rejection not found' });
    }
    await rejection.destroy();
    res.json({ message: 'Rejection deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

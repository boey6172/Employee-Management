const express = require('express');
const router = express.Router();
const { Reason } = require('../models'); // Assuming your model is exported properly

// Create a Reason
router.post('/reasons', async (req, res) => {
    try {
        const reason = await Reason.create(req.body);
        res.status(201).json(reason);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Reasons
router.get('/reasons', async (req, res) => {
    try {
        const reasons = await Reason.findAll();
        res.status(200).json(reasons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single Reason by ID
router.get('/reasons/:id', async (req, res) => {
    try {
        const reason = await Reason.findByPk(req.params.id);
        if (!reason) {
            return res.status(404).json({ message: 'Reason not found' });
        }
        res.status(200).json(reason);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Reason by ID
router.put('/reasons/:id', async (req, res) => {
    try {
        const [updated] = await Reason.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedReason = await Reason.findByPk(req.params.id);
            res.status(200).json(updatedReason);
        } else {
            res.status(404).json({ message: 'Reason not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Reason by ID
router.delete('/reasons/:id', async (req, res) => {
    try {
        const deleted = await Reason.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Reason not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

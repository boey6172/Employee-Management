const express = require('express');
const router = express.Router();
const { NetworkNode } = require('../models'); // Assuming your model is exported properly


// Create a new network node
router.post('/network-nodes', async (req, res) => {
  try {
    const { name, level, uplineId } = req.body;
    const newNode = await NetworkNode.create({ name, level, uplineId });
    res.json(newNode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all network nodes under a specific node
router.get('/network-nodes/:id/under', async (req, res) => {
  try {
    const nodeId = req.params.id;
    const parentNode = await NetworkNode.findByPk(nodeId);
    if (!parentNode) {
      throw new Error('Node not found');
    }

    const nodesUnderParent = await getNodesUnderParent(parentNode);
    res.json(nodesUnderParent);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Recursive function to get all nodes under a parent node
async function getNodesUnderParent(parentNode) {
  const directDownlines = await parentNode.getDownlines();
  let nodesUnderParent = [...directDownlines];

  for (const downline of directDownlines) {
    const indirectDownlines = await getNodesUnderParent(downline);
    nodesUnderParent = [...nodesUnderParent, ...indirectDownlines];
  }

  return nodesUnderParent;
}

module.exports = router;
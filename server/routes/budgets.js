// server/routes/budgets.js
const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Get budget for a specific month
router.get('/:month', async (req, res) => {
  try {
    const budget = await Budget.findOne({ month: new Date(req.params.month) });
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Set or update budget for a month
router.post('/', async (req, res) => {
  try {
    const budget = await Budget.findOneAndUpdate(
      { month: new Date(req.body.month) },
      { amount: req.body.amount },
      { new: true, upsert: true }
    );
    res.status(201).json(budget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
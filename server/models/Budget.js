// server/models/Budget.js
const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  month: { type: Date, required: true },
  amount: { type: Number, required: true }
});

module.exports = mongoose.model('Budget', BudgetSchema);
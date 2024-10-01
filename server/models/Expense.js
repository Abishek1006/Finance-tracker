// server/models/Expense.js
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  type: { type: String, enum: ['expense', 'income'], required: true }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
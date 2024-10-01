
// client/src/components/ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ description, amount: parseFloat(amount), category, type });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default ExpenseForm;

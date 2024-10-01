
// client/src/components/ExpenseList.js
import React from 'react';

function ExpenseList({ expenses, updateExpense, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Transaction History</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            <span>{expense.description}</span>
            <span>₹{expense.amount.toFixed(2)}</span>
            <span>{expense.category}</span>
            <span>{new Date(expense.date).toLocaleDateString()}</span>
            <span>{expense.type}</span>
            <button onClick={() => updateExpense(expense._id, {...expense, amount: expense.amount + 10})}>Update</button>
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
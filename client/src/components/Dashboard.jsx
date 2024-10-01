
// client/src/components/Dashboard.js
import React from 'react';

function Dashboard({ expenses, budget }) {
  const totalIncome = expenses.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Income: ₹{totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ₹{totalExpenses.toFixed(2)}</p>
      <p>Balance: ₹{balance.toFixed(2)}</p>
      <p>Monthly Budget: ₹{budget?.amount?.toFixed(2) || 'Not set'}</p>
    </div>
  );
}

export default Dashboard;
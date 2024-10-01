// client/src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetForm from './components/BudgetForm';
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetchExpenses();
    fetchBudget();
  }, []);

  const fetchExpenses = async () => {
    const response = await fetch('http://localhost:5000/api/expenses');
    const data = await response.json();
    setExpenses(data);
  };

  const fetchBudget = async () => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    const response = await fetch(`http://localhost:5000/api/budgets/${currentMonth}`);
    const data = await response.json();
    setBudget(data);
  };

  const addExpense = async (expense) => {
    const response = await fetch('http://localhost:5000/api/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    const newExpense = await response.json();
    setExpenses([newExpense, ...expenses]);
  };

  const updateExpense = async (id, updatedExpense) => {
    const response = await fetch(`http://localhost:5000/api/expenses/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedExpense),
    });
    const updated = await response.json();
    setExpenses(expenses.map(expense => expense._id === id ? updated : expense));
  };

  const deleteExpense = async (id) => {
    await fetch(`http://localhost:5000/api/expenses/${id}`, { method: 'DELETE' });
    setExpenses(expenses.filter(expense => expense._id !== id));
  };

  const setBudgetAmount = async (amount) => {
    const currentMonth = new Date().toISOString().slice(0, 7);
    const response = await fetch('http://localhost:5000/api/budgets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ month: currentMonth, amount }),
    });
    const newBudget = await response.json();
    setBudget(newBudget);
  };

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <Dashboard expenses={expenses} budget={budget} />
      <ExpenseForm addExpense={addExpense} />
      <BudgetForm setBudgetAmount={setBudgetAmount} currentBudget={budget?.amount} />
      <ExpenseList expenses={expenses} updateExpense={updateExpense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
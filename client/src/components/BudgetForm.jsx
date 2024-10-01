
// client/src/components/BudgetForm.js
import React, { useState } from 'react';

function BudgetForm({ setBudgetAmount, currentBudget }) {
  const [budget, setBudget] = useState(currentBudget || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudgetAmount(parseFloat(budget));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Set monthly budget"
        required
      />
      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;
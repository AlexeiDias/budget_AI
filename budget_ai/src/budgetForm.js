// BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ addBudget }) => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [spent, setSpent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({ title, budget, spent });
    setTitle('');
    setBudget('');
    setSpent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Budget:
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
      </label>
      <label>
        Spent:
        <input type="number" value={spent} onChange={(e) => setSpent(e.target.value)} />
      </label>
      <button type="submit">Add Budget</button>
    </form>
  );
};

export default BudgetForm;

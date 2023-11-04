// App.js
import React, { useState } from 'react';
import BudgetForm from './BudgetForm';

const App = () => {
  const [budgets, setBudgets] = useState([]);

  const addBudget = (newBudget) => {
    setBudgets([...budgets, newBudget]);
  };

  return (
    <div>
      <h1>Budget Visualization App</h1>
      <BudgetForm addBudget={addBudget} />
      <div>
        <h2>Budgets</h2>
        <ul>
          {budgets.map((budget, index) => (
            <li key={index}>
              {budget.title} - Budget: ${budget.budget}, Spent: ${budget.spent}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [input, setInput] = useState('');

  const addExpense = () => {
    if (input.trim()) {
      setExpenses([...expenses, input]);
      setInput('');
    }
  };

  const deleteExpense = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter expense"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addExpense}>Add</button>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
{
  "name": "expense-tracker",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}

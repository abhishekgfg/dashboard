import React, { useState } from 'react';
import '../styles/Expense.css';
import { useNavigate } from 'react-router-dom';

const Expense = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const expenses = [
    { id: 1, date: '2025-07-10', description: 'Office Rent', category: 'Rent', amount: '50000' },
    { id: 2, date: '2025-07-09', description: 'Staff Salary', category: 'Salary', amount: '75000' },
    { id: 3, date: '2025-07-08', description: 'Utilities', category: 'Bills', amount: '3000' },
    { id: 4, date: '2025-07-07', description: 'Equipment Purchase', category: 'Equipment', amount: '25000' },
    { id: 5, date: '2025-07-06', description: 'Marketing', category: 'Advertising', amount: '15000' },
  ];

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = filteredExpenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="container">
      <div className="header">
        <h2>Expense Details</h2>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="add-expense-btn"
            onClick={() => navigate('/add-expense')}
          >
            Add Expense
          </button>
          <button className="dashboard-btn">Dashboard</button>
        </div>
      </div>

      {/* ✅ Expense Tracker Summary Row */}
      <div className="expense-summary">
        <p><strong>Total Expenses:</strong> ₹{totalAmount.toLocaleString()}</p>
        <p><strong>Number of Entries:</strong> {filteredExpenses.length}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td><button className="delete-btn">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expense;

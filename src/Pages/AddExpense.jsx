import React, { useState } from 'react';
import '../styles/AddExpense.css';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to save the expense (e.g., API call or state update)
    console.log('Expense added:', formData);
    // Reset form after submission
    setFormData({ date: '', description: '', category: '', amount: '' });
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Add New Expense</h2>
        <button className="back-btn" onClick={() => window.history.back()}>Back</button>
      </div>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Bills">Bills</option>
            <option value="Equipment">Equipment</option>
            <option value="Advertising">Advertising</option>
          </select>
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Save Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
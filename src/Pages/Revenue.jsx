import React, { useState } from 'react';
import '../styles/Revenue.css';
import { useNavigate } from 'react-router-dom';

const Revenue = () => {
  const [selectedMonth, setSelectedMonth] = useState('July');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedYearlyMonth, setSelectedYearlyMonth] = useState('July');
  const navigate = useNavigate();

  const revenueData = [
    { date: 'Jul 1, 2025', feeAmount: 4260.0, cash: 0.0, online: 4260.0, expense: 0.0 },
    { date: 'Jul 2, 2025', feeAmount: 1239.0, cash: 1239.0, online: 0.0, expense: 0.0 },
    { date: 'Jul 3, 2025', feeAmount: 0.0, cash: 0.0, online: 0.0, expense: 0.0 },
    { date: 'Aug 1, 2025', feeAmount: 3000.0, cash: 3000.0, online: 0.0, expense: 500.0 },
    { date: 'Aug 2, 2025', feeAmount: 4000.0, cash: 2000.0, online: 2000.0, expense: 800.0 },
  ];

  const totalFees = revenueData
    .filter(item => item.date.includes(selectedMonth.slice(0, 3)))
    .reduce((sum, item) => sum + item.feeAmount, 0)
    .toFixed(2);
  const totalExpenses = revenueData
    .filter(item => item.date.includes(selectedMonth.slice(0, 3)))
    .reduce((sum, item) => sum + item.expense, 0)
    .toFixed(2);
  const netProfit = (totalFees - totalExpenses).toFixed(2);

  const uniqueMonths = [...new Set(revenueData.map(item => item.date.split(' ')[0]))];

  const yearlyFiltered = revenueData.filter(item =>
    item.date.startsWith(selectedYearlyMonth.slice(0, 3))
  );

  return (
    <div className="revenue-report-container">
      <h2>Revenue Report</h2>
      <button className="dashboard-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>

      <div className="filter-section">
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="July">July</option>
          <option value="August">August</option>
        </select>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option value="2025">2025</option>
        </select>
        <button className="view-report-btn">View Report</button>
      </div>

      <div className="summary-section1">
        <div className="summary-card1">
          <h3>Total Fees</h3>
          <p>{totalFees}</p>
        </div>
        <div className="summary-card1">
          <h3>Total Expenses</h3>
          <p>{totalExpenses}</p>
        </div>
        <div className="summary-card1">
          <h3>Net Profit</h3>
          <p style={{ color: 'white' }}>{netProfit}</p>
        </div>
      </div>

      <div className="details-section">
        <h3>{selectedMonth} {selectedYear} Details</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Fee Amount</th>
              <th>Cash</th>
              <th>Online</th>
              <th>Expense Amount</th>
            </tr>
          </thead>
          <tbody>
            {revenueData
              .filter(item => item.date.includes(selectedMonth.slice(0, 3)))
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.feeAmount.toFixed(2)}</td>
                  <td>{item.cash.toFixed(2)}</td>
                  <td>{item.online.toFixed(2)}</td>
                  <td>{item.expense.toFixed(2)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Yearly Report Section with Month Filter */}
      <div className="yearly-report-section">
        <h3>Yearly Report - Monthwise</h3>
        <div style={{ marginBottom: '10px' }}>
          <label>Select Month: </label>
          <select value={selectedYearlyMonth} onChange={(e) => setSelectedYearlyMonth(e.target.value)}>
            {uniqueMonths.map((month, index) => (
              <option key={index} value={month === 'Jul' ? 'July' : 'August'}>
                {month === 'Jul' ? 'July' : 'August'}
              </option>
            ))}
          </select>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Fee Amount</th>
              <th>Cash</th>
              <th>Online</th>
              <th>Expense</th>
              <th>Net</th>
            </tr>
          </thead>
          <tbody>
            {yearlyFiltered.map((item, index) => {
              const day = item.date.split(' ')[1].replace(',', '');
              const monthName = item.date.split(' ')[0] === 'Jul' ? 'July' : 'August';
              return (
                <tr key={index}>
                  <td>{`${day} ${monthName}`}</td>
                  <td>{item.feeAmount.toFixed(2)}</td>
                  <td>{item.cash.toFixed(2)}</td>
                  <td>{item.online.toFixed(2)}</td>
                  <td>{item.expense.toFixed(2)}</td>
                  <td>{(item.feeAmount - item.expense).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Revenue;

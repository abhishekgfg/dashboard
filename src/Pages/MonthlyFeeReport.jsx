import React, { useState } from 'react';
import '../styles/MonthlyFeeReport.css';
import { useNavigate } from 'react-router-dom';

const MonthlyFeeReport = () => {
  const navigate = useNavigate();
  const [selectedMonth] = useState('July 2025');

  const feeData = [
    { id: 1, student: 'sunny', paymentDate: '02 Jul 2025', expires: '02 Aug 2025', submitted: '14 Jul 2025 13:08', mode: 'CASH', amount: 639.00 },
    { id: 2, student: 'Manvendra Gupta', paymentDate: '12 Jul 2025', expires: '12 Aug 2025', submitted: '12 Jul 2025 23:50', mode: 'ONLINE', amount: 600.00 },
    { id: 3, student: 'Rahul Singh', paymentDate: '10 Jul 2025', expires: '10 Aug 2025', submitted: '10 Jul 2025 17:40', mode: 'ONLINE', amount: 600.00 },
    { id: 4, student: 'Dileep Vijaylaya', paymentDate: '10 Jul 2025', expires: '10 Aug 2025', submitted: '10 Jul 2025 08:24', mode: 'ONLINE', amount: 2.10 },
    { id: 5, student: 'Dilip singh', paymentDate: '10 Jul 2025', expires: '10 Aug 2025', submitted: '10 Jul 2025 08:22', mode: 'ONLINE', amount: 1.05 },
    { id: 6, student: 'Uttam singh', paymentDate: '10 Jul 2025', expires: '10 Aug 2025', submitted: '10 Jul 2025 08:21', mode: 'ONLINE', amount: 2.10 },
  ];

  const totalCollected = feeData.reduce((sum, item) => sum + item.amount, 0).toFixed(2);
  const cashPayments = feeData.filter(item => item.mode === 'CASH').reduce((sum, item) => sum + item.amount, 0).toFixed(2);
  const onlinePayments = feeData.filter(item => item.mode === 'ONLINE').reduce((sum, item) => sum + item.amount, 0).toFixed(2);

  return (
    <div className="monthly-fee-report-container">
      <div className="monthly-fee-header">
        <h2>Monthly Fee Report - July 2025</h2>
        <div className="monthly-fee-header-actions">
          <select value={selectedMonth} disabled>
            <option value="July 2025">July 2025</option>
          </select>
          <button className="monthly-fee-filter-btn">Filter</button>
          <input type="text" placeholder="Search students..." />
          <button className="monthly-fee-dashboard-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
      </div>
      <div className="monthly-fee-summary">
        <div className="monthly-fee-card">
          <h3>Total Collected</h3>
          <p>₹{totalCollected}</p>
        </div>
        <div className="monthly-fee-card">
          <h3>Cash Payments</h3>
          <p>₹{cashPayments}</p>
        </div>
        <div className="monthly-fee-card">
          <h3>Online Payments</h3>
          <p>₹{onlinePayments}</p>
        </div>
      </div>
      <div className="monthly-fee-table-wrapper">
        <table className="monthly-fee-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Actions</th>
              <th>Student</th>
              <th>Payment Date</th>
              <th>Expires</th>
              <th>Submitted</th>
              <th>Mode</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <button className="monthly-fee-send-btn">Send</button>
                  <button className="monthly-fee-invoice-btn">Invoice</button>
                </td>
                <td>{item.student}</td>
                <td>{item.paymentDate}</td>
                <td>{item.expires}</td>
                <td>{item.submitted}</td>
                <td>
                  <span className={`monthly-fee-mode ${item.mode === 'CASH' ? 'cash' : 'online'}`}>
                    {item.mode}
                  </span>
                </td>
                <td>₹{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthlyFeeReport;
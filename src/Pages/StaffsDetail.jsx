import React, { useState } from 'react';
import '../styles/StaffPage.css';

const StaffsDetail = () => {
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [staffData, setStaffData] = useState([
    { id: 1, name: 'Aditya Verma', role: 'Math Teacher' },
    { id: 2, name: 'Neha Singh', role: 'Science Teacher' },
    { id: 3, name: 'Rahul Kumar', role: 'Clerk' }
  ]);

  const [newStaff, setNewStaff] = useState({ name: '', role: '' });

  const handleAddSalaryClick = (staff) => {
    setSelectedStaff(staff);
    setShowSalaryForm((prev) => (selectedStaff?.id === staff.id ? !prev : true));
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    const newId = staffData.length + 1;
    setStaffData([...staffData, { ...newStaff, id: newId }]);
    setNewStaff({ name: '', role: '' });
    setShowAddForm(false);
  };

  return (
    <div className="staff-container">
      <h1>👨‍🏫 Staff Management</h1>

      <div className="action-buttons">
        <button className="btn view">View Staff</button>
        <button className="btn add" onClick={() => setShowAddForm(true)}>Add Staff</button>
      </div>

      <div className="staff-list">
        <h2>📋 Staff Details</h2>
        {staffData.map((staff) => (
          <div key={staff.id} className="staff-card">
            <div className="staff-info">
              <div>
                <h3>{staff.name}</h3>
                <p>{staff.role}</p>
              </div>
              <button className="salary-btn" onClick={() => handleAddSalaryClick(staff)}>
                Allot Salary
              </button>
            </div>

            {showSalaryForm && selectedStaff?.id === staff.id && (
              <div className="salary-form animate-slide">
                <h4>💰 Allot Salary to {staff.name}</h4>
                <form>
                  <label>Salary Amount:</label>
                  <input type="number" placeholder="Enter amount" />

                  <label>Expiry Date:</label>
                  <input type="date" defaultValue="2025-01-16" />

                  <label>Payment Mode:</label>
                  <select>
                    <option>Cash</option>
                    <option>Online</option>
                    <option>Bank Transfer</option>
                  </select>

                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Staff Modal */}
      {showAddForm && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h3>➕ Add New Staff</h3>
            <form onSubmit={handleAddStaff}>
              <label>Name:</label>
              <input
                type="text"
                required
                value={newStaff.name}
                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
              />
              <label>Role:</label>
              <input
                type="text"
                required
                value={newStaff.role}
                onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit" className="submit-btn">Add</button>
                <button onClick={() => setShowAddForm(false)} className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffsDetail;

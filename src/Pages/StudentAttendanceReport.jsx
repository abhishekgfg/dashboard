import React from 'react';
import '../styles/StudentAttendanceReport.css';
import { FaUsers, FaCalendarAlt, FaClipboardList, FaFilter } from 'react-icons/fa';

const StudentAttendanceReport = () => {
  return (
    <div className="attendance-container">
      <h2 className="page-title">Student Attendance Report</h2>
      <p className="manager-id">Manager ID: lms_manage_a572d23c75fd39f</p>

      {/* Summary Cards */}
      <div className="summary-cards">
  <div className="summary-card">
    <span className="summary-title">TOTAL STUDENTS</span>
    <FaUsers className="summary-icon" />
    <p className="summary-value">0</p>
  </div>
  <div className="summary-card">
    <span className="summary-title green">DATE RANGE</span>
    <FaCalendarAlt className="summary-icon" />
    <p className="summary-value">Jul 1, 2025 - Jul 31, 2025</p>
  </div>
  <div className="summary-card">
    <span className="summary-title">TOTAL VISITS</span>
    <FaClipboardList className="summary-icon" />
    <p className="summary-value">0</p>
  </div>
</div>


      {/* Filter Section */}
      <div className="card filter-card">
        <div className="card-header">Filter Attendance</div>
        <div className="card-body filter-body">
          <select>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
          <input type="date" defaultValue="2025-07-01" />
          <input type="date" defaultValue="2025-07-31" />
          <button className="apply-filter-btn">
            <FaFilter /> Apply Filter
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="card table-card">
        <div className="card-header">Attendance Records</div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Visits</th>
                <th>First Visit</th>
                <th>Last Visit</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="no-records">
                  No attendance records found for the selected date range.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceReport;

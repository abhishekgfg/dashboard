import React from "react";
import "../styles/FeesAndSeats.css"; // Make sure this path is correct

const FeesAndSeatsSection = () => {
  const seats = [
    2, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18,
    101, 102, 103, 104, 105
  ];

  return (
    <div className="fees-seats-section">
      {/* Students with Due Fees */}
      <div className="due-fees-section">
        <div className="due-fees-header">
          <h2>🚨 Students with Due Fees</h2>
        </div>
        <div className="due-fees-card">
          <table className="due-fees-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Remaining Due</th>
                <th>Expiration Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19</td>
                <td>Advik Sharma</td>
                <td>advik.sharma@example.com</td>
                <td>9876543219</td>
                <td>₹1</td>
                <td>2025-09-17</td>
              </tr>
              <tr>
                <td>1109</td>
                <td>Shivam Rajak II</td>
                <td>shivamrajak@gmail.com</td>
                <td>7172737475</td>
                <td>₹1020</td>
                <td>2026-01-23</td>
              </tr>
              <tr>
                <td>16</td>
                <td>Anika Patel</td>
                <td>anika.patel@example.com</td>
                <td>9876543216</td>
                <td>₹10</td>
                <td>2032-04-04</td>
              </tr>
            </tbody>
          </table>
          <button className="view-more-btn">View More</button>
        </div>
      </div>

      {/* Seats Availability */}
      <div className="seat-section">
        <div className="seat-header">
          <h2>🪑 Seats Availability</h2>
        </div>
        <div className="seat-grid">
          {seats.map((seat) => (
            <div className="seat-box" key={seat}>
              <strong>Seat {seat}</strong>
              <span className="available">Available</span>
            </div>
          ))}
        </div>
        <button className="view-more-btn">More</button>
      </div>
    </div>
  );
};

export default FeesAndSeatsSection;

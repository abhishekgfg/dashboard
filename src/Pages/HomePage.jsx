import React from "react";
import "../styles/HomePage.css";
import { useTheme } from "../context/ThemeContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faUsers, faCheckCircle, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
   const navigate = useNavigate();
  const seats = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 16, 17, 18, 101, 102, 103, 104, 105, 12,
  ];
   const { theme, toggleTheme } = useTheme(); 
  const feeData = [
    { day: 2, amount: 1300 },
    { day: 10, amount: 600 },
    { day: 11, amount: 600 },
    { day: 14, amount: 1350 },
    { day: 17, amount: 900 },
    { day: 24, amount: 200 },
    { day: 28, amount: 550 },
  ];

  const peakDays = [
    { date: "Jul 14", amount: "₹1,300.00" },
    { date: "Jul 2", amount: "₹1,239.00" },
    { date: "Jul 17", amount: "₹922.00" },
  ];

  const lowDays = [
    { date: "Jul 5", amount: "₹2.10" },
    { date: "Jul 23", amount: "₹250.00" },
    { date: "Jul 27", amount: "₹500.00" },
  ];

  return (
    <div className="homepage-container">
      {/* 🔍 Search + Buttons Row */}
      <div className="top-row">
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="top-buttons">
          <button className="quick-btn red">Quick Registration</button>
          <button className="quick-btn blue">Add Student Req</button>
          <button className="quick-btn purple">Self Registration</button>
            <div className="icon-group">
                <span className="notification">22</span>
             <span className="theme-icon" onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </span>
                 <span
      className="power-icon"
      onClick={() => navigate("/auth")}
      style={{ cursor: "pointer" }}
    >
      ⏻
    </span>
            </div>
        </div>
      </div>

{/* 📊 Student Stats */}
<div className="stats-row single-row">
  <div className="stat-card">
    <div className="stat-icon users">
      <FontAwesomeIcon icon={faUsers} />
    </div>
    <div>
      <h2>37</h2>
      <p className="stat-name">Total Students</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon active">
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
    <div>
      <h2>26</h2>
      <p className="stat-name">Active Students</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon boys">
      <FontAwesomeIcon icon={faMale} />
    </div>
    <div>
      <h2>15</h2>
      <p className="stat-name">Active Boys</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon girls">
      <FontAwesomeIcon icon={faFemale} />
    </div>
    <div>
      <h2>3</h2>
      <p className="stat-name">Active Girls</p>
    </div>
  </div>
</div>


      {/* ⚠️ Alert */}
      <div className="alert-banner">
        Now, you will be able to find out which student has allotted <strong>'no seat'</strong> in main menu or <a href="#">Click Here</a>
      </div>

      {/* 💰 Payment Overview */}
        <div className="wallet-overview">
            <div className="wallet-card">
            <h2>₹2,881.45</h2>
            <p>Wallet Balance</p>
            <small>+25.42% than last month</small>
            </div>
           <div className="payment-summary">
  <div className="payment-left">
    <h3>Payment Overview</h3>
    <p className="desc">Payment made in the last few months by the students.</p>
    <ul className="payment-list">
      <li><span className="dot dot-july"></span> July <strong>₹3,307.45</strong></li>
      <li><span className="dot dot-june"></span> June <strong>₹2,637.15</strong></li>
      <li><span className="dot dot-may"></span> May <strong>₹2,790.00</strong></li>
      <li><span className="dot dot-april"></span> April <strong>₹7,505.00</strong></li>
    </ul>
  </div>
  <div className="donut-chart">
    <div className="circle"></div>
    <div className="legend">
      <div><span className="legend-dot" style={{ background: "#7b9ff9" }}></span> July</div>
      <div><span className="legend-dot" style={{ background: "#a678c8" }}></span> June</div>
      <div><span className="legend-dot" style={{ background: "#6ee7b7" }}></span> May</div>
      <div><span className="legend-dot" style={{ background: "#5eead4" }}></span> April</div>
    </div>
  </div>
</div>
</div>

{/* 📈 Revenue & Expenses Section */}
<div className="revenue-expenses-container">
  <div className="revenue-box">
    <h2>Revenue Section :-</h2>
    <p>Today's : <strong>₹0.00</strong></p>
    <p>Yesterday's : <strong>₹1,207.35</strong></p>
    <p>Current Month's : <strong>₹2,881.45</strong></p>

    <h2 className="payment-title">Payment Collection</h2>
    <div className="payment-type">
      <div className="cash">Cash : <strong>₹2,022.00</strong></div>
      <div className="online">Online : <strong>₹859.45</strong></div>
    </div>
  </div>

  <div className="expense-box">
  <h2>Recent Expenses</h2>
  <p>Total for Today: <strong>0</strong></p>
  <p>Total for Yesterday: <strong>0</strong></p>
  <p>Total for This Month: <strong>0</strong></p>

  {/* ✅ Scrollable wrapper */}
  <div className="table-wrapper">
    <table className="expense-tables">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Purpose</th>
          <th>Subject</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Personal</td><td>Nasta</td><td>20.00</td><td>2025-11-13</td></tr>
        <tr><td>2</td><td>Library</td><td>Tytfguggyuyu77yuy</td><td>50.00</td><td>2025-06-29</td></tr>
        <tr><td>3</td><td>Library</td><td>Tytfguggyuyu77yuy</td><td>50.00</td><td>2025-06-29</td></tr>
        <tr><td>4</td><td>Library</td><td>Fan</td><td>100.00</td><td>2025-06-23</td></tr>
        <tr><td>5</td><td>Library</td><td>Chai</td><td>40.00</td><td>2025-04-30</td></tr>
      </tbody>
    </table>
  </div>

  <button className="more-button">More</button>
</div>
</div>

<div className="payment-tables">
  <div className="payment-card">
    <h2>Recent Payments</h2>

    {/* ✅ Add scroll wrapper */}
    <div className="table-wrapper">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Student Name</th>
            <th>Fee Amount</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2773</td><td>Rahul Singh</td><td>₹600.00</td><td>2025-07-10 17:49:08</td></tr>
          <tr><td>1090</td><td>Udit Gupta</td><td>₹600.00</td><td>2025-07-10 17:27:31</td></tr>
          <tr><td>2567</td><td>Dileep Vijoliya</td><td>₹2.10</td><td>2025-07-10 08:24:15</td></tr>
          <tr><td>2172</td><td>Dilip</td><td>₹1.05</td><td>2025-07-10 08:22:28</td></tr>
          <tr><td>2172</td><td>Dilip</td><td>₹2.10</td><td>2025-07-10 08:21:15</td></tr>
        </tbody>
      </table>
    </div>

    <button className="more-button">More</button>
  </div>

  <div className="payment-card">
    <h2>Pending Payments</h2>

    {/* ✅ Add scroll wrapper */}
    <div className="table-wrapper">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Passed</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12</td>
            <td>Dia Sharma</td>
            <td>2025-03-01</td>
            <td>132</td>
            <td>600.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <button className="more-button">More</button>
  </div>
</div>

<div class="due-fees-section">
  <div class="due-fees-header">
    <h2>🚨 Students with Due Fees</h2>
  </div>
  <div class="due-fees-card">
    <table class="due-fees-table">
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
    <button class="view-more-btn">View More</button>
  </div>
</div>
 <div className="section-wrapper">
      {/* Seats Availability */}
      <div className="seat-availability-box">
        <h2>Seats Availability</h2>
        <div className="seat-grid">
          {seats.map((seat) => (
            <div className="seat-card" key={seat}>
              <strong>Seat {seat}</strong>
              <span className="available-text">Available</span>
            </div>
          ))}
        </div>
        <button className="more-btn">More</button>
      </div>

      {/* Chart and Peak/Low */}
      <div className="chart-and-days-row">
        {/* Chart */}
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={feeData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4fc3f7" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Peak Days */}
       <div className="peaklow-column">
  {/* Peak Days */}
  <div className="peaklow-card">
    <h3 className="peak-title">Peak Days</h3>
    <ul>
      {peakDays.map((item, i) => (
        <li key={i}>
          <span>{item.date}</span>
          <span className="">{item.amount}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Low Days */}
  <div className="peaklow-card">
    <h3 className="low-title">Low Days</h3>
    <ul>
      {lowDays.map((item, i) => (
        <li key={i}>
          <span>{item.date}</span>
          <span className="">{item.amount}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

      </div>
    </div>


    </div>
  );
};

export default HomePage;

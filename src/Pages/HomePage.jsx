import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
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
                <span className="theme-icon">🌙</span>
                <span className="power-icon">⏻</span>
            </div>
        </div>
      </div>

      {/* 📊 Student Stats */}
      <div className="stats-row single-row">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <h2>37</h2>
            <p className="stat-name">Total Students</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div>
            <h2>26</h2>
            <p className="stat-name">Active Students</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👦</div>
          <div>
            <h2>15</h2>
            <p className="stat-name">Active Boys</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👧</div>
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
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import {
  FaUserCircle, FaTachometerAlt, FaRupeeSign, FaUsers, FaClipboardList,
  FaMailBulk, FaEnvelopeOpenText, FaBirthdayCake, FaCogs,
  FaCommentDots, FaChalkboardTeacher, FaCalendarCheck, FaUserEdit,
  FaBars, FaPowerOff, FaMoon
} from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import "../styles/Sidebar.css";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ==== Mobile Header ==== */}
      <div className="mobile-dashboard-header">
        <FaBars className="mobile-header-icon" onClick={() => setIsOpen(true)} />
        <div className="mobile-header-title">Dashboard</div>
        <div className="mobile-header-actions">
          <FaMoon className="mobile-header-icon moon" />
          <FaPowerOff className="mobile-header-icon power" />
        </div>
      </div>

      {/* ==== Sidebar ==== */}
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>×</div>

        <div className="profile-section">
          <FaUserCircle className="profile-icon" />
          <div className="profile-info">
            <h4>Kuldeep Jha</h4>
            <p>kuldeeprajput604@gmail.com</p>
          </div>
        </div>

        <div className="sidebar-menu">
          <NavLink to="/" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
            <span className="icon dashboard"><FaTachometerAlt /></span> Dashboard
          </NavLink>
          <NavLink to="/future-projection" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
            <span className="icon prediction"><FaRupeeSign /></span> Prediction
          </NavLink>
          <NavLink to="/Demo" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
            <span className="icon demo"><IoMdPersonAdd /></span> Add Demo
          </NavLink>
          <NavLink to="/add-student-detail" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
            <span className="icon add-student"><IoMdPersonAdd /></span> Add Student
          </NavLink>
          <NavLink to="/student-details" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}>
            <span className="icon student-detail"><FaUsers /></span> Student Detail
          </NavLink>

          <div className="menu-item"><span className="icon fee"><FaClipboardList /></span> Manage Fee</div>
          <div className="menu-item"><span className="icon pending-fee"><FaClipboardList /></span> Pending Fee</div>
          <div className="menu-item"><span className="icon seats"><FaUsers /></span> Seats</div>
          <div className="menu-item"><span className="icon expenses"><FaRupeeSign /></span> Expenses</div>
          <div className="menu-item"><span className="icon revenue"><FaRupeeSign /></span> Revenue</div>
          <div className="menu-item"><span className="icon monthly-fee"><FaRupeeSign /></span> Monthly Fee</div>
          <div className="menu-item"><span className="icon unseated"><FaUsers /></span> Unseated Students</div>
          <div className="menu-item"><span className="icon bulk-mail"><FaMailBulk /></span> Bulk Mail</div>
          <div className="menu-item"><span className="icon todo"><FaEnvelopeOpenText /></span> To Do List</div>
          <div className="menu-item"><span className="icon messenger"><FaCommentDots /></span> Messenger</div>
          <div className="menu-item"><span className="icon add-notice"><MdOutlineEventNote /></span> Add Notice</div>
          <div className="menu-item"><span className="icon view-notice"><FaRupeeSign /></span> View Notices</div>
          <div className="menu-item"><span className="icon birthday"><FaBirthdayCake /></span> Birthday Wish</div>
          <div className="menu-item"><span className="icon students-new"><FaRupeeSign /></span> Students (New)</div>
          <div className="menu-item"><span className="icon attendance"><FaCalendarCheck /></span> Attendance</div>
          <div className="menu-item"><span className="icon staffs"><FaChalkboardTeacher /></span> Staffs Detail</div>
          <div className="menu-item"><span className="icon usernames"><FaUserEdit /></span> Usernames</div>
          <div className="menu-item"><span className="icon settings"><FaCogs /></span> Settings</div>
        </div>
      </div>

      <div className="main-content">
        {/* Page content goes here */}
      </div>
    </>
  );
};

export default Sidebar;

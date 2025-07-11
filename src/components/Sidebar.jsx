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

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ==== Mobile Header (fixed) ==== */}
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
        {/* Close button on mobile */}
        <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>×</div>

        {/* Profile */}
        <div className="profile-section">
          <FaUserCircle className="profile-icon" />
          <div className="profile-info">
            <h4>Kuldeep Jha</h4>
            <p>kuldeeprajput604@gmail.com</p>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="sidebar-menu">
          <div className="menu-item"><FaTachometerAlt /> Dashboard</div>
          <div className="menu-item"><FaRupeeSign /> Prediction</div>
          <div className="menu-item"><IoMdPersonAdd /> Add Demo</div>
          <div className="menu-item"><IoMdPersonAdd /> Add Student</div>
          <div className="menu-item"><FaUsers /> Student Detail</div>
          <div className="menu-item"><FaClipboardList /> Manage Fee</div>
          <div className="menu-item"><FaClipboardList /> Pending Fee</div>
          <div className="menu-item"><FaUsers /> Seats</div>
          <div className="menu-item"><FaRupeeSign /> Expenses</div>
          <div className="menu-item"><FaRupeeSign /> Revenue</div>
          <div className="menu-item"><FaRupeeSign /> Monthly Fee</div>
          <div className="menu-item"><FaUsers /> Unseated Students</div>
          <div className="menu-item"><FaMailBulk /> Bulk Mail</div>
          <div className="menu-item"><FaEnvelopeOpenText /> To Do List</div>
          <div className="menu-item"><FaCommentDots /> Messenger</div>
          <div className="menu-item"><MdOutlineEventNote /> Add Notice</div>
          <div className="menu-item"><FaRupeeSign /> View Notices</div>
          <div className="menu-item"><FaBirthdayCake /> Birthday Wish</div>
          <div className="menu-item"><FaRupeeSign /> Students (New)</div>
          <div className="menu-item"><FaCalendarCheck /> Attendance</div>
          <div className="menu-item"><FaChalkboardTeacher /> Staffs Detail</div>
          <div className="menu-item"><FaUserEdit /> Usernames</div>
          <div className="menu-item"><FaCogs /> Settings</div>
        </div>
      </div>

      {/* Main content wrapper to add padding on mobile */}
      <div className="main-content">
        {/* Put your main content here */}
      </div>
    </>
  );
};

export default Sidebar;

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
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };
    const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ==== Mobile Header ==== */}
      <div className="mobile-dashboard-header">
        <FaBars className="mobile-header-icon" onClick={() => setIsOpen(!isOpen)} />
        <div className="mobile-header-title">Dashboard</div>
        <div className="mobile-header-actions">
           <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
          <FaPowerOff className="mobile-header-icon power" />
        </div>
      </div>

      {/* ==== Sidebar ==== */}
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar-close-btn" onClick={closeSidebar}></div>

        <div className="profile-section">
          <FaUserCircle className="profile-icon" />
          <div className="profile-info">
            <h4>Abhishek Kumar</h4>
            <p>abhishek8579013@gmail.com</p>
          </div>  
        </div>

        <div className="sidebar-menu scrollable">
          <NavLink to="/" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={closeSidebar}>
            <span className="icon dashboard"><FaTachometerAlt /></span> Dashboard
          </NavLink>
          <NavLink to="/future-projection" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={closeSidebar}>
            <span className="icon prediction"><FaRupeeSign /></span> Prediction
          </NavLink>
          <NavLink to="/Demo" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={closeSidebar}>
            <span className="icon demo"><IoMdPersonAdd /></span> Add Demo
          </NavLink>
          <NavLink to="/add-student-detail" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={closeSidebar}>
            <span className="icon add-student"><IoMdPersonAdd /></span> Add Student
          </NavLink>
          <NavLink to="/student-details" className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`} onClick={closeSidebar}>
            <span className="icon student-detail"><FaUsers /></span> Student Detail
          </NavLink>
          <NavLink to="/manage-fee" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon fee"><FaClipboardList /></span> Manage Fee
          </NavLink>
          <NavLink to="/pending-fee" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon pending-fee"><FaClipboardList /></span> Pending Fee
          </NavLink>
          <NavLink to="/seat-allotment" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon seats"><FaUsers /></span> Seats
          </NavLink>
          <NavLink to="/expense" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon expenses"><FaRupeeSign /></span> Expenses
          </NavLink>
          <NavLink to="/revenue" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon revenue"><FaRupeeSign /></span> Revenue
          </NavLink>
          <NavLink to="/monthly-fee" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon monthly-fee"><FaRupeeSign /></span> Monthly Fee
          </NavLink>
          <NavLink to="/students-without-seats" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon unseated"><FaUsers /></span> Unseated Students
          </NavLink>
          <NavLink to="/bulk-mail" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon bulk-mail"><FaMailBulk /></span> Bulk Mail
          </NavLink>
          <NavLink to="/todo-list" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon todo"><FaEnvelopeOpenText /></span> To Do List
          </NavLink>
          <div className="menu-item"><span className="icon messenger"><FaCommentDots /></span> Messenger</div>
          <NavLink to="/add-notice" className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`} onClick={closeSidebar}>
            <span className="icon add-notice"><MdOutlineEventNote /></span> Notice
          </NavLink>
          <NavLink to="/birthday-wish" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
            <span className="icon birthday"><FaBirthdayCake /></span> Birthday Wish
          </NavLink>
          <NavLink to="/new-students" className="menu-item" onClick={closeSidebar}>
            <span className="icon students-new"><FaRupeeSign /></span> Students (New)
          </NavLink>
          <NavLink to="/attendance-report" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
            <span className="icon attendance"><FaCalendarCheck /></span> Attendance
          </NavLink>
          <NavLink to="/staffs-detail" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
            <span className="icon staffs"><FaChalkboardTeacher /></span> Staffs Detail
          </NavLink>
          <div className="menu-item"><span className="icon usernames"><FaUserEdit /></span> Usernames</div>
          <NavLink to="/settings" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} onClick={closeSidebar}>
            <span className="icon settings"><FaCogs /></span> Settings
          </NavLink>
        </div>
      </div>

      <div className="main-content">
        {/* Page content goes here */}
      </div>
    </>
  );
};

export default Sidebar;
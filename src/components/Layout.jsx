// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children, toggleTheme }) => {
  return (
    <div className="layout-wrapper">
      <Sidebar toggleTheme={toggleTheme} />
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

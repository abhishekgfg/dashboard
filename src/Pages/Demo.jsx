import React from 'react';
import '../styles/Demo.css';

const Demo = () => {
  return (
    <div className="container">
      <header>
        <h1>Add Demo
        </h1>
        <div className="nav-buttons">
          <button>View Students</button>
          <button>Insert Student</button>
          <button>Edit Student</button>
        </div>
      </header>
      <div className="form-container">
        <h2>Insert Student</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value="2025-07-13" readOnly />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Demo;
import React from 'react';
import '../styles/AddStudent.css';

const AddStudentDetail = () => {
  return (
    <div className="app-container">
      <div className="form-card">
        <h2>Add Student Detail</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select>
                <option value="">Select Gender</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Father Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Select Class Here</label>
              <select>
                <option value="" style={{ color: 'red' }}>Select Class Here</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mother Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group username-field">
              <label>Username</label>
              <input type="text" value="greatlibrary" readOnly />
              <span className="availability">username is available</span>
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input type="password" value="********" readOnly />
            </div>
            <div className="form-group">
              <label>Select Area</label>
              <select>
                <option value="">Select Area</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Suboffice</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" value="dd --- yyyy" readOnly />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Aadhar Number</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Profile Picture:</label>
              <input type="file" />
            </div>
            <div className="form-group date-field">
              <label>Date</label>
              <input type="text" value="13-Jul-2025" readOnly />
            </div>
          </div>
          <div className="button-row">
            <button type="submit" className="signup-btn">Signup</button>
            <button type="button" className="back-btn">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentDetail;
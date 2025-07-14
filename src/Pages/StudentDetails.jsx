import React, { useState } from 'react';
import '../styles/StudentDetails.css';

const StudentDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const students = [
    { id: 1, name: 'Advik Sharma', email: 'advik.sharma@example.com', mobile: '9876543219', dob: '2005-05-17', gender: 'Male', contactDate: '2025-01-17', leavingDate: '0000-00-00', photo: 'photo1.jpg' },
    { id: 2, name: 'Ajay Rajpoot', email: 'lodhijayakumar4@gmail.com', mobile: '9876543219', dob: '2005-06-17', gender: 'Male', contactDate: '2024-04-27', leavingDate: '0000-00-00', photo: 'photo2.jpg' },
    { id: 3, name: 'Ananya Patel', email: 'ananya.patel@example.com', mobile: '9876543202', dob: '2005-06-26', gender: 'Female', contactDate: '2024-04-27', leavingDate: '0000-00-00', photo: 'photo3.jpg' },
    { id: 4, name: 'Anika Patel', email: 'anika.patel@example.com', mobile: '9876543216', dob: '2006-04-18', gender: 'Female', contactDate: '2025-04-30', leavingDate: '0000-00-00', photo: 'photo4.jpg' },
    { id: 5, name: 'Apil', email: 'apil@gmail.com', mobile: '7566660809', dob: '2001-03-21', gender: 'Male', contactDate: '2025-06-23', leavingDate: '0000-00-00', photo: 'photo5.jpg' },
    { id: 6, name: 'Devansh Mourya', email: 'xcva@gmail.com', mobile: '7586487576', dob: '2005-11-15', gender: 'Male', contactDate: '2025-07-08', leavingDate: '0000-00-00', photo: 'photo6.jpg' },
    { id: 7, name: 'Dia Sharma', email: 'xcva@gmail.com', mobile: '9876543212', dob: '2005-11-15', gender: 'Female', contactDate: '2024-10-16', leavingDate: '0000-00-00', photo: 'photo7.jpg' },
    { id: 8, name: 'Dileep', email: 'dileepvijolya@gmail.com', mobile: '7566660809', dob: '2001-03-21', gender: 'Male', contactDate: '2025-07-12', leavingDate: '0000-00-00', photo: 'photo8.jpg' },
    { id: 9, name: 'Dileep Vijolya', email: 'dileepvijolya@gmail.com', mobile: '7566660809', dob: '2001-03-21', gender: 'Male', contactDate: '2025-07-10', leavingDate: '0000-00-00', photo: 'photo9.jpg' },
    { id: 10, name: 'Dileep Vijolya', email: 'dileepvijolya@gmail.com', mobile: '7566660809', dob: '2001-03-21', gender: 'Male', contactDate: '2025-07-10', leavingDate: '0000-00-00', photo: 'photo10.jpg' },
    { id: 11, name: 'Dillip', email: 'dileeprajput0809@gmail.com', mobile: '7566660809', dob: '2001-05-16', gender: 'Male', contactDate: '2025-05-16', leavingDate: '0000-00-00', photo: 'photo11.jpg' },
    { id: 12, name: 'Hui', email: 'asdfasdf@gmail.com', mobile: '9165858585', dob: '2022-12-01', gender: 'Male', contactDate: '2025-05-21', leavingDate: '0000-00-00', photo: 'photo12.jpg' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search by student name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <select
            className="status-dropdown"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="column-btn">Column</button>
          <button className="home-btn">Home</button>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact Date</th>
              <th>Leaving Date</th>
              <th>Photo</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.mobile}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.contactDate}</td>
                <td>{student.leavingDate}</td>
                <td><img src={student.photo} alt="Student" width="50" /></td>
                <td><button className="profile-btn">Form</button></td>
                <td>
                  <button className="action-btn edit-btn">Edit</button>
                  <button className="action-btn form-btn">Form</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;

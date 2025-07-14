import React, { useState } from 'react';
import '../styles/ManageFee.css';

const  ManageFee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 1, name: 'Advik Sharma', email: 'advik.sharma@example.com', mobile: '9876543219' },
    { id: 2, name: 'Ajay Rajpoot', email: 'lodhiajaykumar4@gmail.com', mobile: '9876543219' },
    { id: 3, name: 'Ananya Patel', email: 'ananya.patel@example.com', mobile: '9876543202' },
    { id: 4, name: 'Anika Patel', email: 'anika.patel@example.com', mobile: '9876543216' },
    { id: 5, name: 'Apil', email: 'apil@gmail.com', mobile: '7566660809' },
    { id: 6, name: 'Devansh Mourya', email: 'xcva@gmail.com', mobile: '7586487575' },
    { id: 7, name: 'Dia Sharma', email: 'xcva@gmail.com', mobile: '9876543212' },
    { id: 8, name: 'Dileep', email: 'dileepvijolya@gmail.com', mobile: '7566660809' },
    { id: 9, name: 'Dileep Vijolya', email: 'dileepvijolya@gmail.com', mobile: '7566660809' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search students by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="dashboard-btn">Dashboard</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Manage</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td><button className="manage-btn">Manage</button></td>
              <td><button className="modify-btn">Modify</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFee;
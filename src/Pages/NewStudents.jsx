// src/Pages/NewStudents.jsx
import React from 'react';
import '../styles/NewStudents.css';

const students = [
  { id: 2616, name: 'Ajay Rajpoot', image: '/images/ajay.jpg' },
  { id: 2328, name: 'apil', image: '/images/sunset.jpg' },
  { id: 2744, name: 'Devansh Mourya', image: '/images/default.jpg' },
  { id: 2613, name: 'Dileep Vijoliya', image: '/images/cat.jpg' },
  { id: 2567, name: 'Dileep Vijoliya', image: '', placeholder: 'D' },
  { id: 2172, name: 'Dilip', image: '/images/cocacola.jpg' },
  { id: 26, name: 'hanumat gupta', image: '/images/student.jpg' },
  { id: 2612, name: 'Kuldeep Lodhi', image: '/images/poet.jpg' },
  { id: 158, name: 'Kuldeep Lodhi', image: '/images/kuldeep.jpg' },
  { id: 2705, name: 'Mahima Lodhi', image: '', placeholder: 'M' },
  { id: 2533, name: 'Manage Library', image: '/images/library.jpg' },
];

const NewStudents = () => {
  return (
    <div className="new-students-container">
      <h2 className="page-title">New Students (Last 30 Days)</h2>
      <div className="student-grid">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            {student.image ? (
              <img src={student.image} alt={student.name} className="student-img" />
            ) : (
              <div className="placeholder-img">{student.placeholder}</div>
            )}
            <h4 className="student-name">{student.name}</h4>
            <p className="student-id">Student ID: {student.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewStudents;

import React from 'react';
import '../styles/StudentsWithoutSeats.css';
import { useNavigate } from 'react-router-dom';

const StudentsWithoutSeats = () => {
  const navigate = useNavigate();
  const students = [
    { id: 'S1044', name: 'Advik Sharma', image: 'path/to/advik.jpg', imsId: 'ims_student_6857091274bc' },
    { id: 'STU685cd9937d263', name: 'Ajay Rajpoot', image: 'path/to/ajay.jpg' },
    { id: 'S1041', name: 'Anika Patel', image: null },
    { id: '2e999303d463', name: 'Devansh Mourya', image: null },
    { id: 'S1037', name: 'Dia Sharma', image: null },
    { id: 'be5b6e28ac94', name: 'Dileep', image: null },
    { id: 'STU6857091274bc', name: 'Dileep Vijoliya', image: 'path/to/dileep-v.jpg' },
    { id: 'stud_685ad610a0d', name: 'Dileep Vijoliya', image: null },
    { id: 'stud_1f659fb8bc0', name: 'Dilip', image: null },
    { id: 'c6ca41b478c', name: 'Hui', image: null },
    { id: '685ad65fb734', name: 'Kulddep Lodhi', image: null },
    { id: 'fee5282ac40', name: 'Kulddeep Dodhi', image: 'path/to/kulddeep.jpg' },
  ];

  return (
    <div className="students-without-seats">
      <h2>Students Without Allotted Seats</h2>
      <div className="student-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            {student.image ? (
              <img src={student.image} alt={`${student.name} photo`} className="student-image" />
            ) : (
              <div className="placeholder">
                {student.name.charAt(0).toUpperCase()}
                {student.image === 'path/to/dileep-v.jpg' && <span>140 x 140</span>}
              </div>
            )}
            <p>{student.name}</p>
            <p>ID: {student.id}</p>
            {student.imsId && <p>ims_student: {student.imsId}</p>}
            <button className="allot-seat-btn">Allot Seat</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsWithoutSeats;
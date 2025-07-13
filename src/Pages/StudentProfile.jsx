import React from 'react';
import '../styles/Studentdata.css';

const StudentProfile = () => {
  const students = [
    {
      id: 1,
      name: 'Advik Sharma',
      email: 'advik.sharma@example.com',
      mobile: '9876543219',
      dob: '2005-08-17',
      gender: 'Male',
      continueDate: '2025-01-17',
      leavingDate: '0000-00-00',
      photo: '63%',
      profile: '63%',
    },
    {
      id: 2,
      name: 'Ajay Rajpoot',
      email: 'iothajaykumar4@gmail.com',
      mobile: '',
      dob: '',
      gender: '',
      continueDate: '',
      leavingDate: '',
      photo: '',
      profile: '63%',
    },
    // Add more students if needed
  ];

  return (
    <div className="student-profile-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="Search by student name..." />
      </div>

      <div className="table-scroll-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Continue Date</th>
              <th>Leaving Date</th>
              <th>Photo</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email || ''}</td>
                <td>{student.mobile || ''}</td>
                <td>{student.dob || ''}</td>
                <td>{student.gender || ''}</td>
                <td>{student.continueDate || ''}</td>
                <td>{student.leavingDate || ''}</td>
                <td>{student.photo || ''}</td>
                <td>{student.profile || ''}</td>
                <td>Form</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;

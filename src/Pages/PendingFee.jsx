import React, { useState } from 'react';
import '../styles/PendingFee.css';

const PendingFee = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    { id: 2811, facility: '', block: '', batch: '', seat: '', name: 'Samayank', joiningDate: '', due: '0.00', profilePic: 'profile1.jpg' },
    { id: 2807, facility: '', block: '', batch: '', seat: '', name: 'Rihan Qureshi', joiningDate: '', due: '0.00', profilePic: 'chair1.jpg' },
    { id: 2800, facility: '6am-12pm', block: '', batch: '', seat: '', name: 'Sunny', joiningDate: '', due: '600.00', profilePic: 'profile2.jpg' },
    { id: 2809, facility: '', block: '', batch: '', seat: '', name: 'Rihan Qureshi', joiningDate: '', due: '0.00', profilePic: 'chair2.jpg' },
    { id: 2812, facility: '', block: '', batch: '', seat: '', name: 'Samay', joiningDate: '', due: '0.00', profilePic: 'profile3.jpg' },
    { id: 2743, facility: '', block: '', batch: '', seat: '', name: 'Rahul Kumar', joiningDate: '', due: '0.00', profilePic: 'profile4.jpg' },
    { id: 2804, facility: '', block: '', batch: '', seat: '', name: 'Dileep', joiningDate: '', due: '0.00', profilePic: 'profile5.jpg' },
    { id: 2709, facility: '6am-12pm', block: '', batch: '', seat: '', name: 'Shuvam', joiningDate: '', due: '600.00', profilePic: 'profile6.jpg' },
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
     <div className="header-bar">
  <div className="header-content">
    <span>🎓 These students need to SUBMIT FEE for the first time — thank you!</span>
    <button className="column-filter-btn">Column Filter</button>
  </div>
</div>
      <div className="table-wrapper1">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Facility</th>
        <th>Block</th>
        <th>Batch</th>
        <th>Seat</th>
        <th>Name</th>
        <th>Joining Date</th>
        <th>Due</th>
        <th>Profile Pic</th>
        <th>Action</th>
        <th>Email</th>
        <th>Wp</th>
        <th>Text Msg</th>
      </tr>
    </thead>
    <tbody>
      {filteredStudents.map(student => (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.facility}</td>
          <td>{student.block}</td>
          <td>{student.batch}</td>
          <td>{student.seat}</td>
          <td>{student.name}</td>
          <td>{student.joiningDate}</td>
          <td>{student.due}</td>
          <td><img src={student.profilePic} alt="Profile" width="40" /></td>
          <td><button className="submit-fee-btn">₹ Submit Fee</button></td>
          <td><button className="email-btn">Mail</button></td>
          <td><button className="wp-btn">Wp</button></td>
          <td><button className="text-msg-btn">Text</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default PendingFee;
import React, { useState } from 'react';
import '../styles/SeatAllotment.css';

const SeatAllotment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const slots = [
    {
      timeSlot: '12:00 - 10:00',
      seats: [
        { seatNo: '1A', student: 'Dileep Rajput', studentId: '273', time: '12:00 - 10:00', totalHours: '2', image: 'student1.jpg' },
        { seatNo: '6A', student: 'Avni Patel', studentId: '20', time: '12:00 - 10:00', totalHours: '2', image: 'student2.jpg' },
      ],
    },
    {
      timeSlot: '06:00 - 12:00',
      seats: [
        { seatNo: '3', student: 'Raj', studentId: '979', time: '06:00 - 12:00', totalHours: '6', image: 'student3.jpg' },
        { seatNo: '5', student: 'Dilip', studentId: '2172', time: '06:00 - 12:00', totalHours: '6', image: 'student4.jpg' },
        { seatNo: '8', student: 'Arjun Gupta', studentId: '5', time: '06:00 - 12:00', totalHours: '6', image: 'student5.jpg' },
        { seatNo: '9', student: 'Kuldeep Lodhi', studentId: '158', time: '06:00 - 12:00', totalHours: '6', image: 'student6.jpg' },
        { seatNo: '10', student: 'Test One', studentId: '39', time: '06:00 - 12:00', totalHours: '6', image: 'student7.jpg' },
        { seatNo: '51', student: 'Raj', studentId: '979', time: '06:00 - 12:00', totalHours: '6', image: 'student8.jpg' },
      ],
    },
    {
      timeSlot: '06:00 - 18:00',
      seats: [
        { seatNo: '12', student: '', studentId: '', time: '06:00 - 18:00', totalHours: '', image: '' },
        { seatNo: '15', student: '', studentId: '', time: '06:00 - 18:00', totalHours: '', image: '' },
        { seatNo: '18', student: '', studentId: '', time: '06:00 - 18:00', totalHours: '', image: '' },
      ],
    },
  ];

  const filteredSlots = slots.map(slot => ({
    ...slot,
    seats: slot.seats.filter(seat =>
      seat.student.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm
    ),
  }));

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <button className="dashboard-btn">Dashboard</button> */}
      </div>
      {filteredSlots.map((slot, index) => (
        <div key={index} className="slot-section">
          <h2>Time Slot: {slot.timeSlot}</h2>
          <div className="seats-container">
            {slot.seats.map((seat, seatIndex) => (
              <div key={seatIndex} className="seat-card">
                <p>Seat No: {seat.seatNo}</p>
                {seat.image && <img src={seat.image} alt="Student" width="100" />}
                {!seat.image && <span>Student Image</span>}
                <p>{seat.student}</p>
                <p>Student Id: {seat.studentId}</p>
                <p>Time Slot: {seat.time}</p>
                <p>Total Hours: {seat.totalHours}</p>
                <button className="un-allot-btn">Un-allot</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatAllotment;
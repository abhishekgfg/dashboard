import React from "react";
import "../styles/BirthdayPage.css";
import { FaBirthdayCake } from "react-icons/fa";

const BirthdayPage = ({ todayBirthdays = [] }) => {
  return (
    <div className="birthday-page">
      <header className="birthday-header">
        <FaBirthdayCake className="cake-icon" />
        <h1>🎂 Student Birthday Congratulations</h1>
      </header>

      <div className="birthday-search">
        <input type="text" placeholder="Search students..." />
      </div>

      {todayBirthdays.length === 0 ? (
        <div className="no-birthday-box animate-fade">
          <p>No students have their birthday today.</p>
        </div>
      ) : (
        <div className="birthday-grid animate-fade">
          {todayBirthdays.map((student, index) => (
            <div className="birthday-card" key={index}>
              <img src={student.photo} alt={student.name} />
              <h3>{student.name}</h3>
              <p>🎉 Happy Birthday! 🎈</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdayPage;

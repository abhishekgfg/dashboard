import React, { useState } from 'react';
import '../styles/BulkMail.css';

const BulkMail = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [offerText, setOfferText] = useState('');

  const [students, setStudents] = useState([
    { id: 1426, name: 'Raj Bhargava', email: 'rajbhag@gmail.com' },
    { id: 1109, name: 'Shivam Rajak II', email: 'shivamrajak@gmail.com' },
    { id: 2228, name: 'Hui', email: 'asdfsade@gmail.com' },
    { id: 158, name: 'Kuldeep Lodhi', email: 'thiskuldeep7@gmail.com' },
  ]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setImage(file);
    } else {
      alert('Please upload only JPG or PNG files.');
    }
  };

  const handleSendMail = (email) => {
    alert(`Mail sent to ${email}`);
  };

  return (
    <div className="bulkmail-wrapper">
      <h2 className="bulkmail-title">Compose Message</h2>

      <div className="bulkmail-message-box">
        <textarea
          placeholder="Offer for student"
          value={offerText}
          onChange={(e) => setOfferText(e.target.value)}
          className="bulkmail-offer-textarea"
        />

        <p><strong>Post</strong></p>
        <textarea
          placeholder="This is test again."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bulkmail-main-textarea"
        />

        <div className="bulkmail-upload-section">
          <label className="bulkmail-upload-label">
            <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
            Choose File
          </label>
          {image && (
            <div className="bulkmail-preview">
              <span>Attached Image: {image.name}</span>
              <button className="bulkmail-delete-btn" onClick={() => setImage(null)}>Delete Image</button>
            </div>
          )}
          <p className="bulkmail-note">Note: Please attach only JPG or PNG files.</p>
        </div>

        <button className="bulkmail-update-btn">Update</button>
      </div>

      <div className="bulkmail-student-section">
        <h3 className="bulkmail-student-title">Student List</h3>
        <div className="bulkmail-table-responsive">
          <table className="bulkmail-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Send Mail</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => handleSendMail(student.email)}
                      className="bulkmail-send-btn"
                    >
                      Send Mail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button className="bulkmail-start-btn">Start Sending</button>
    </div>
  );
};

export default BulkMail;

import React, { useState } from 'react';
import '../styles/AddNoticePopup.css';
import { MdOutlineEventNote } from 'react-icons/md';

const AddNoticePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noticeDate, setNoticeDate] = useState(new Date().toISOString().split('T')[0]);
  const [noticeText, setNoticeText] = useState('');
  const [image, setImage] = useState(null);
  const [notices, setNotices] = useState([]); // ⬅️ store added notices

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNotice = {
      date: noticeDate,
      text: noticeText,
      image: image ? URL.createObjectURL(image) : null,
    };

    setNotices([newNotice, ...notices]); // Add new notice to top
    setNoticeText('');
    setImage(null);
    setShowPopup(false);
  };

  return (
    <>
      {/* Add Notice Button */}
      <div
        className="menu-item-btn"
        onClick={() => setShowPopup(true)}
      >
        <span className="icon add-notice"><MdOutlineEventNote /></span> Add Notice
      </div>

      {/* Add Notice Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Add Notice</h2>
            <button className="close-btn" onClick={() => setShowPopup(false)}>✕</button>

            <form onSubmit={handleSubmit}>
              <label>Notice Date:</label>
              <input
                type="date"
                value={noticeDate}
                onChange={(e) => setNoticeDate(e.target.value)}
              />

              <label>Notice Text:</label>
              <textarea
                rows="3"
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
              />

              <label>Upload Image:</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* View Notice Section */}
      <div className="notice-list-section">
        <h3>All Notices</h3>
        {notices.length === 0 ? (
          <p style={{ color: '#555' }}>No notices added yet.</p>
        ) : (
          <div className="notice-list">
            {notices.map((notice, index) => (
              <div key={index} className="notice-card">
                <p><strong>Date:</strong> {notice.date}</p>
                <p><strong>Text:</strong> {notice.text}</p>
                {notice.image && (
                  <img src={notice.image} alt="Notice" className="notice-image" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AddNoticePopup;

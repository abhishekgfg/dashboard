import React from 'react';
import '../styles/SettingsPage.css';
import {
  FaUser,
  FaImage,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsersCog,
  FaUniversity,
  FaHome,
} from 'react-icons/fa';
import {
  MdLibraryBooks,
  MdAttachMoney,
  MdLock,
  MdMail,
  MdFeedback,
  MdPerson,
} from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineForm } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

const settings = [
  { label: 'Personal Details', icon: <FaUser /> },
  { label: 'Library Details', icon: <MdLibraryBooks /> },
  { label: 'Change Logo', icon: <HiOutlineOfficeBuilding /> },

  { label: 'Image Gallery', icon: <FaImage /> },
  { label: 'Library Profile', icon: <FaUsersCog /> },
  { label: 'Manage Seats', icon: <MdLock /> },

  { label: 'Set Slot Fee', icon: <FaMoneyBillWave /> },
  { label: 'Set Hourly Fee', icon: <BiTimeFive /> },
  { label: 'Set Locker Fee', icon: <MdAttachMoney /> },

  { label: 'Set Registration Fee', icon: <MdLibraryBooks /> },
  { label: 'Set Location', icon: <FaMapMarkerAlt /> },
  { label: 'Setup Mail', icon: <MdMail /> },

  { label: 'Security', icon: <FaShieldAlt /> },
  { label: 'Bank Account', icon: <FaUniversity /> },
  { label: 'Automatic Mail Setup', icon: <FaHome /> },

  { label: 'Feedback Permission', icon: <MdFeedback /> },
  {
    label: (
      <>
        Form QR<br />
        <span className="">generate</span>
      </>
    ),
    icon: <AiOutlineForm />,
  },
];

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-grid">
        {settings.map((item, index) => (
          <div className="setting-card" key={index}>
            <span className="icon">{item.icon}</span>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;

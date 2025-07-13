import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import HomePage from "./Pages/HomePage";
import FutureProjection from "./Pages/Prediction";
import Demo from './Pages/Demo';
import AddStudentDetail from './Pages/AddStudentDetail';
import StudentProfile from './Pages/StudentProfile'; 


function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "20px", backgroundColor: "#f4f7fe" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/future-projection" element={<FutureProjection />} />
            <Route path="/Demo" element={<Demo />} />
            <Route path="/add-student-detail" element={<AddStudentDetail />} />
            <Route path="/student/:id" element={<StudentProfile />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
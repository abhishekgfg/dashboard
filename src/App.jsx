// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './Pages/HomePage';
import FutureProjection from './Pages/Prediction';
import Demo from './Pages/Demo';
import AddStudentDetail from './Pages/AddStudentDetail';
import StudentDetails from './Pages/StudentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/future-projection"
          element={
            <Layout>
              <FutureProjection />
            </Layout>
          }
        />
        <Route
          path="/Demo"
          element={
            <Layout>
              <Demo />
            </Layout>
          }
        />
        <Route
          path="/add-student-detail"
          element={
            <Layout>
              <AddStudentDetail />
            </Layout>
          }
        />
        <Route
          path="/student-details"
          element={
            <Layout>
              <StudentDetails />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

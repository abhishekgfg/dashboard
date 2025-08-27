// src/App.jsx
import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import HomePage from './Pages/HomePage';
import FutureProjection from './Pages/Prediction';
import Demo from './Pages/Demo';
import AddStudentDetail from './Pages/AddStudentDetail';
import StudentDetails from './Pages/StudentDetails';
import ManageFee from './Pages/ManageFee';
import PendingFee from './Pages/PendingFee';
import SeatAllotment from './Pages/SeatAllotment';
import Expense from './Pages/Expense';
import AddExpense from './Pages/AddExpense';
import Revenue from './Pages/Revenue';
import MonthlyFeeReport from './Pages/MonthlyFeeReport';
import StudentsWithoutSeats from './Pages/StudentsWithoutSeats';
import TodoList from './Pages/TodoList';
import AddNotice from './Pages/AddNoticePopup';
import BirthdayWish from './Pages/BirthdayPage';
import NewStudents from './Pages/NewStudents';
import StudentAttendanceReport from './Pages/StudentAttendanceReport';
import StaffsDetail from './Pages/StaffsDetail'; // Make sure the filename matches
import SettingsPage from './Pages/SettingsPage';
import BulkMail from './Pages/BulkMail';
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

import AuthPage from "./components/AuthPage";



 





function App() {


   


  return (
   <ThemeProvider> 
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
     <Route
            path="/"
            element={
              <Layout>
              <HomePage  />
 {/* 👈 pass function */}
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


<Route
  path="/manage-fee"
  element={
    <Layout>
      <ManageFee />
    </Layout>
  }
/>
<Route
  path="/pending-fee"
  element={
    <Layout>
      <PendingFee />
    </Layout>
  }
/>
<Route
  path="/seat-allotment"
  element={
    <Layout>
      <SeatAllotment />
    </Layout>
  }
/>

<Route
  path="/expense"
  element={
    <Layout>
      <Expense />
    </Layout>
  }
/>

<Route
  path="/add-expense"
  element={
    <Layout>
      <AddExpense />
    </Layout>
  }
/>

<Route
          path="/revenue"
          element={
            <Layout>
              <Revenue />
            </Layout>
          }
        />


        <Route
  path="/monthly-fee"
  element={
    <Layout>
      <MonthlyFeeReport />
    </Layout>
  }
/>
<Route
  path="/students-without-seats"
  element={
    <Layout>
      <StudentsWithoutSeats />
    </Layout>
  }
/>
<Route
  path="/todo-list"
  element={
    <Layout>
      <TodoList />
    </Layout>
  }
/>

<Route
  path="/add-notice"
  element={
    <Layout>
      <AddNotice />
    </Layout>
  }
/>

<Route
  path="/birthday-wish"
  element={
    <Layout>
      <BirthdayWish />
    </Layout>
  }
/>
<Route
  path="/new-students"
  element={
    <Layout>
      <NewStudents />
    </Layout>
  }
/>

<Route
  path="/attendance-report"
  element={
    <Layout>
      <StudentAttendanceReport />
    </Layout>
  }
/>
<Route
  path="/staffs-detail"
  element={
    <Layout>
      <StaffsDetail />
    </Layout>
  }
/>
<Route
  path="/settings"
  element={
    <Layout>
      <SettingsPage />
    </Layout>
  }
/>
<Route
  path="/bulk-mail"
  element={
    <Layout>
      <BulkMail />
    </Layout>
  }
/>



        
      </Routes>
    </Router>
       </ThemeProvider>
  );
}

export default App;

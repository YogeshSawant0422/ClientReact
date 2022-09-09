import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

import Demo from "./components/Demo.js";
import AdminLogin from './LoginCredintials/AdminLogin';
import StudentLogin from './LoginCredintials/StudentLogin';
import TeacherLogin from './LoginCredintials/TeacherLogin';
import AdminDashboard from './Dashboard/AdminDashboard';
import StudentDashboard from './Dashboard/StudentDashboard';
import TeacherDashboard from './Dashboard/TeacherDashboard';
import AddNewStudent from './AdminPanel/AddNewStudent';
import AddNewTeacher from './AdminPanel/AddNewTeacher';
import AddNotifications from './AdminPanel/AddNotifications';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Demo />}/> 
        <Route path="/*" element={<Demo />}/> 
        <Route path="/adminlogin" element={<AdminLogin />}/>
        <Route path="/teacherlogin" element={<TeacherLogin/>}/>
        <Route path="/studentlogin" element={<StudentLogin />}/>
        <Route path="/AdminDashboard" element={<AdminDashboard />}/>
        <Route path="/StudentDashboard" element={<StudentDashboard />}/>
        <Route path="/TeacherDashboard" element={<TeacherDashboard />}/> 
        <Route path="/AddNewStudent" element={<AddNewStudent />} /> 
        <Route path="/AddNewTeacher" element={<AddNewTeacher />} />
        <Route path="/AddNotifications" element={<AddNotifications/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;

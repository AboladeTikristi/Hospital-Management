import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboardnav from "./pages/Dashboardnav"
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PatientsLabs from "./pages/PatientsLabs";
import Todo from "./pages/TodoList";
import Appointments from "./pages/Appointments";
import SettingsApp from "./pages/SettingsApp";
import AdminDasboard from "./pages/AdminDashboard";
import PatientsList from "./pages/PatientsList"
import Calender from "./pages/CalenderApp"
import AdminAppointments from "./pages/AdminAppointments";
import AdminPatients from "./pages/AdminPatients";
import AdminCalender from "./pages/AdminCalender";
import AdminTodo from "./pages/AdminTodo";
import AdminSettings from "./pages/AdminSettings";




function App() {
  return (
    <>
    {/* <LandingPage/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/drdashboard" element={<Dashboardnav />}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patientslabs" element={<PatientsLabs />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/settings" element={<SettingsApp />} />
      <Route path="/patientslist" element={<PatientsList />} />
      <Route path="/calender" element={<Calender />}/>

      <Route path="/admindashboard" element={<AdminDasboard />} />
      <Route path="/adminappointment" element={<AdminAppointments />} />
      <Route path="/adminpatient" element={<AdminPatients />} />
      <Route path="/admincalender" element={<AdminCalender />}/>
      <Route path="/admintodo" element={<AdminTodo />} />
      <Route path="/adminsettings" element={<AdminSettings />} />



    
    </Routes>
    </>
  );
}

export default App;

import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import DoctorSignup from "./pages/DoctorSignup";
import DoctorLogin from "./pages/DoctorLogin";
import Dashboardnav from "./pages/Dashboardnav"
import PatientBills from "./pages/PatientBills";
import PatSettings from "./pages/PatSettings";
import {useSelector,useDispatch} from 'react-redux'
// import {increase,decrease} from './actions/index'
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PatientsLabs from "./pages/PatientsLabs";
import Todo from "./pages/TodoList";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import AdminDasboard from "./pages/AdminDashboard";




function App() {
  let dispatch = useDispatch()
  return (
    <>
    {/* <LandingPage/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/doclogin' element={<DoctorLogin/>}/>
      <Route path='/docsignup' element={<DoctorSignup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/patbills' element={<PatientBills/>}/>
      <Route path='/patsets' element={<PatSettings/>}/>
      {/* <Route path="/dashboard" element={<Dashboardnav/>}/> */}
      <Route path="/dashboard" element={<Dashboardnav />}/>
      <Route path="/profile" element={<Profile/>} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/patientslabs" element={<PatientsLabs />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="/admindashboard" element={<AdminDasboard />} />


    
    </Routes>
    </>
  );
}

export default App;

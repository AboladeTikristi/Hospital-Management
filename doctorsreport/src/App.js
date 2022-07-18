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
import PatientsDashboard from "./pages/PatientsDashboard";
import Todo from "./pages/TodoList";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import AdminDasboard from "./pages/AdminDashboard";
import Chat from "./pages/Chat";
import Patientpastappoint from "./pages/PatientAppointment";




function App() {
  let dispatch = useDispatch()
  return (
    <>
    {/* <LandingPage/> */}
    {/* <Login/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/patbills' element={<PatientBills/>}/>
      <Route path='/patsets' element={<PatSettings/>}/>
      <Route path="/patdashboard" element={<PatientsDashboard/>} />
      <Route path="/chat" element={<Chat/>} />
      <Route path="/patappointments" element={<Patientpastappoint/>} />
     

      <Route path='/doclogin' element={<DoctorLogin/>}/>
      <Route path='/docsignup' element={<DoctorSignup/>}/>
      <Route path="/dashboard" element={<Dashboardnav />}/>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/patientslabs" element={<PatientsLabs />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/patsettings" element={<PatSettings/>} />

      <Route path="/admindashboard" element={<AdminDasboard />} />
    


    
    </Routes>
    </>
  );
}

export default App;

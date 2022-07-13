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

function App() {
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
      <Route path="/dashboard" element={<Dashboardnav/>}/>
    </Routes>
    </>
  );
}

export default App;

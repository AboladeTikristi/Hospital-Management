import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import DoctorSignup from "./pages/DoctorSignup";
import DoctorLogin from "./pages/DoctorLogin";
import Dashboard from "./pages/Dashboard";

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
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;

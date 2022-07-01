import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <LandingPage/>
    {/* <Login/> */}
    {/* <Routes>
      <Route pat='/' element={<LandingPage/>}/>
      <Route pat='/login' element={<Login/>}/>
    </Routes> */}
    </>
  );
}

export default App;

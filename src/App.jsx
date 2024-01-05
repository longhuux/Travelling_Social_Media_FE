import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SignInSide from "./pages/Login";
import SignUp from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ForgetPass from "./pages/Forgetpass";
// import ChangePass from "./pages/Changepass";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/register" element={<SignUp />} />
        {/* <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/changepass" element={<ChangePass />} /> */}
      </Routes>
    </>
  );
}

export default App;

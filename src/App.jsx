import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SignInSide from "./pages/Login";
import SignUp from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostForm from "./components/feeds/PostForm";
import SignIn from "./pages/Changepass";
import ForgetPass from "./pages/Forgetpass";
import VacationDetails from "./pages/VacationDetails";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/test" element={<PostForm />} />
        <Route path="/changepass/:id" element={<SignIn />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/vacation/:id" element={<VacationDetails />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;

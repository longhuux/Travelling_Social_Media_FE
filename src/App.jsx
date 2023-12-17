import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './pages/Login'
import SignUp from './pages/Signup'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/sign-in" element={<SignInSide />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
    </>
  )
}

export default App

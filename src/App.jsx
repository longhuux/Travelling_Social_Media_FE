import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import SignInSide from './pages/Login'
import SignUp from './pages/Signup'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Post from './components/feeds/Post'
import CreateJourney from './components/leftSidebar/CreateJourney'
import PostForm from './components/feeds/PostForm'


function App() {

  return (
    <>
      <Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/sign-in" element={<SignInSide />} />
				<Route path="/sign-up" element={<SignUp />} />
        <Route path='/test' element={<PostForm />} />
			</Routes>
    </>
  )
}

export default App

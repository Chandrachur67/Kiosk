import { useState } from 'react'
import Home from "./Components/Home/Home.jsx"
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Diagnosis from "./Components/Diagnosis/Diagnosis.jsx"
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        {/* <div> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Home />} />
            <Route exact path="/register" element={<Home />} />
            <Route exact path="/profile" element={<Home />} />
            <Route exact path="/diagnosis" element={<Diagnosis />} />
        </Routes>
        {/* </div> */}
      </div>
    </div>
  )
}

export default App

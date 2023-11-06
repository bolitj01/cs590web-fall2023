import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (
    
    <Router>

  
      <Routes>
      
 
      <Route path="/login" element={<Login/>} />
      
      </Routes>
    </Router>
  )
}

export default App

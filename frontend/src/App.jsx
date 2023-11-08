import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';


function App() {

  const Login = lazy(() => import('./components/Login'));
  const Signup = lazy(() => import('./components/Signup'));

  return (
    
    <Router>

    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
     
 
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />

      
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App

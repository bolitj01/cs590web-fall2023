import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Loading from './components/Loading';


function App() {

  const Login = lazy(() => import('./components/Login'));
  const Signup = lazy(() => import('./components/Signup'));
  const Home = lazy(() => import('./pages/Home'));
  return (
    
    <Router>

    <Suspense fallback={<Loading />}>
      <Routes>
     
 
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/" Component={Home} />

      </Routes>
      </Suspense>
    </Router>
  )
}

export default App

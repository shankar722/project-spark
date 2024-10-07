import React, { useState } from 'react'
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './layouts/home';
import Login from './components/login/login';
import './App.scss'
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<Home />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

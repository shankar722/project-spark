import React, { useState } from 'react'
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './layouts/home';
import Login from './components/login/login';
import './App.scss'
import AttackSurface from './components/attackSurface/attackSurface';
import { GuardianEyeProvider } from 'redux/context';
import VulnerabilityScan from 'components/vulnerabilityScan/vulnerabilityScan';
function App() {

  return (
    <GuardianEyeProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<Home />}>
            <Route path='/' element={<Navigate to='/attack-surface' />} />
            <Route path='/attack-surface' element={<AttackSurface />} />
            <Route path='/vulnerability-scan' element={<VulnerabilityScan />} />
          </Route>
        </Routes>
      </Router>
    </GuardianEyeProvider>
  )
}

export default App

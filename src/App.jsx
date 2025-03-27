import React, { useState } from 'react'
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './layouts/home';
import Login from './components/login/login';
import './App.scss'
import AttackSurface from './components/attackSurface/attackSurface';
import { GuardianEyeProvider } from 'redux/context';
function App() {

  return (
    <GuardianEyeProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<Home />}>
            <Route path='/' element={<Navigate to='/attack-surface' />} />
            {/* <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tcb-product-details' element={<TcbProductDetails />} />
            <Route path='/chat' element={<Chat />} /> */}
            <Route path='/attack-surface' element={<AttackSurface />} />
            {/* <Route path='/tcbTca' element={<TcbTca />} />
            <Route path='/graph' element={<Graph />} /> */}
          </Route>
        </Routes>
      </Router>
    </GuardianEyeProvider>
  )
}

export default App

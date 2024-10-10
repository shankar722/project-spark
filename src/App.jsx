import React, { useState } from 'react'
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './layouts/home';
import Login from './components/login/login';
import './App.scss'
import Dashboard from './components/dashboard/dashboard';
import TcbProductDetails from './components/tcbProductDetails/tcbProductDetails';
import Chat from './components/chat/chat';

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
            <Route path='/tcb-product-details' element={<TcbProductDetails />} />
            <Route path='/chat' element={<Chat />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

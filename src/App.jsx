import React from 'react'
import socketIo from 'socket.io-client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Home from './screens/Home'
import DashBoard from './screens/DashBoard'

const ENTPOINT = 'http://localhost:4500/'
const socket = socketIo(ENTPOINT, { transports: ['websocket'] })

const ProtectedRoute = ({children}) => {
  const isLoggedIn = localStorage.getItem("token") !== null || true;
  console.log("islogged" , isLoggedIn);

  if(!isLoggedIn) {
    return <Navigate to={'/auth'}/>
  }

  else if(isLoggedIn && ['auth'].includes(window.location.pathname)){
    return <Navigate to={'/'} /> 
  }

  return children
}

const App = () => {

  socket.on("connect", () => {
    console.log("connected");
  })
  return (
    <section className='bg-gray-900 h-screen'>

    <BrowserRouter>
    
      <Routes>
        <Route path='/auth' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        } />
        <Route path='/' element={
          <ProtectedRoute>
            <DashBoard/>  
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
    </section>
  )
}

export default App
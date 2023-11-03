import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import User from "./Pages/User"
import Login from "./Pages/Login"
import Navbar from './components/Header/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
     
      </Routes>

      
    </div>
  )
}

export default App

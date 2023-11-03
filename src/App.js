import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import User from "./Pages/User"
import Login from "./Pages/Login"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<User/>}/>
     
      </Routes>

      
    </div>
  )
}

export default App

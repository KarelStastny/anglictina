import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import User from "./Pages/User"
import Login from "./Pages/Login"
import Exercise from "./Pages/Exercise"
import Registration from "./Pages/Registration"
import Navbar from './components/Header/Navbar'
import Account from './Pages/Account'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/exercise' element={<Exercise/>}/>
        <Route path='/account' element={<Account/>}/>
     
      </Routes>

      
    </div>
  )
}

export default App

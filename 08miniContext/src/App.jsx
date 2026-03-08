import { useState } from 'react'
import Login from './Componenets/login'
import Profile from './Componenets/profile' 
import UserContextprovider from './Context/userContextprovider' 
import './App.css'

function App() {
  

  return (
    <UserContextprovider>
       <h1>Chai aur Code</h1>
       //children of useContext
       <Login />
       <Profile />
   </UserContextprovider>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { useState } from 'react'
const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      console.log("This is admin")
    }else if(email == 'user@me.com' && password == '123'){
      console.log("This is user")
    }
    else{
      alert("invalid Credential")

    }
  }

  


  return (
    <div>
      {!user ? <Login/> handleLogin={handleLogin}: ''}
      <EmployeeDashboard/>
      <AdminDashboard/>
    </div>
  )
}

export default App

import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  
  // const authData = useContext(AuthContext)

  
  

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)

  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      console.log(user)
    }
    else if (email == 'user@me.com' && password == '123'){
      setUser('employee')
      console.log(user)
    }
    else{
      alert("Invalid Credentials")
    }
  }
  


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard/> :<EmployeeDashboard/> }
      
    </div>
  )
}

export default App

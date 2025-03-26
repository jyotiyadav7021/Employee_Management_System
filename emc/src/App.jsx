import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInuser, setloggedInUser] = useState(null)
  const authData = useContext(AuthContext)
  

  //useEffect(()=>{
    //if(authData){
     // const loggedInUser = localStorage.getItem("loggedInUser")
     // if(loggedInUser){
        //setUser(loggedInUser.role)

     // }
    //}
  //}, [authData]);

  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.mail && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUser('employee')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
      
    }
    else{
      alert("invalid Credential")

    }
  }

  


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInuser}/> : null)}
    </div>
  )
}

export default App

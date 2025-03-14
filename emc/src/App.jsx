import React, { useEffect } from 'react'
import Login from './components/Auth/Login'

import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  useEffect(()=>{
    setLocalStorage()
  },)


  return (
    <div>
      <Login/>
      <EmployeeDashboard/>
      <AdminDashboard/>
    </div>
  )
}

export default App

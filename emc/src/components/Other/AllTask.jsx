import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    console.log(authData.employees)
    

  return (
    <div className='bg-[1c1c1c] p-5 rounded mt-5 h-48 overflow-auto'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Jyoti</h2>
            <h3>Make a ui design</h3>
            <h5>Status</h5>
        </div>
      
    </div>
  )
}

export default AllTask

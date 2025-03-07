import React from 'react'

const Login = () => {
  return (
    
    <div className='flex items-center justify-center'> 
        <div className='borde-2 border-blue-500'>
            <form className='flex flex-col items-center justify-center'>
                <input type="email" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Password' />
            </form>
        </div>
        <div className='rounded border-spacing-2'>
            <button className='rounded border-spacing-2'>Login</button>
        </div>

    </div>
    

  )
}

export default Login

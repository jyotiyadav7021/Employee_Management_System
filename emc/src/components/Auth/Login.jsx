import React from 'react'

const Login = () => {
  return (
    
    <div className='flex  h-screen w-screen items-center justify-center'> 
        <div className='border-2 border-emerald-500 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                <input required className=' mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='mt-7 text-white outline-none border-none  hover:bg-emerald-800  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Log in </button>
            </form>

        </div>
        

    </div>
    

  )
}

export default Login

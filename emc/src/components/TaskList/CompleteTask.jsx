import React from 'react'

const CompleteTask = () => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptas dolore, aut rem accusantium ea in corporis molestias repellendus, repudiandae, impedit dolor optio iusto corrupti enim quia magni quaerat. Earum.
        </p>
        </div>
        <div className='mt-2'>
          <button>Completed Task</button>


        </div>
    </div>
  )
}

export default CompleteTask

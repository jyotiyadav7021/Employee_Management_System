import React from 'react'


const NewTask = ({data}) => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>20 feb 2024</h4>

        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>
            {data.description}
        </p>
        </div>
        <div>
          <button className='w-full'>New Task </button>
        </div>
    </div>
  )
}

export default NewTask

import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
      <div className='p-7 '>
        <h3 className='mb-7 leading-[1.1] text-6xl font-bold'>
            Prospective<br></br> <span className='bg-gray-200 rounded-full px-3 py-3'>Customer</span> <br />Segmentation  
        </h3>
        <p className='text-xl font-medium text-gray-600'>lorem20
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='text-6xl'>
        <i className="ri-arrow-right-up-fill"></i>
      </div>
    </div>
  )
}

export default LeftContent

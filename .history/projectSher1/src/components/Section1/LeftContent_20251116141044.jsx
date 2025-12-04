import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 bg-blue-300  '>
      <div className='p-5 '>
        <h3 className='mb-5 text-6xl font-bold'>
            Prospective<br></br> <span>Customer</span> <br />Segmentation  
        </h3>
        <p className='text-xl'>lorem20
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='text-8xl'>
        <i className="ri-arrow-right-up-fill"></i>
      </div>
    </div>
  )
}

export default LeftContent

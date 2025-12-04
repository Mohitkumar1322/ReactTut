import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 rounded-4xl b'>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="Card Image" className='w-full h-48 rounded-t-4xl object-cover' />
        <div className='p-4'>
            <h2 className='text-black text-2xl font-bold mb-2 border-b-2 border-black'>Card Title</h2>
            <p className='text-black text-base'>This is a description of the card. It provides additional information about the content of the card.</p>
        </div>
      
    </div>
  )
}

export default RightCard

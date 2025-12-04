import React from 'react'
import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full p-6 w-2/3 flex items-center gap'>
      <RightCard />
      <RightCard />
    </div>
  )
}

export default RightContent

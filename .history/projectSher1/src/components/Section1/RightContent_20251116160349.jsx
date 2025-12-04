import React from 'react'
import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 w-2/3 flex items-center gap-5'>
      <RightCard title="Card Title 1" description="This is a description for card 1." />
      <RightCard title="Card Title 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </div>
  )
}

export default RightContent

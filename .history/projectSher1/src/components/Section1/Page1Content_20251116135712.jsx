import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='py-10 flex items-center gap-10 justify-between px-18 h-[90vh] '>
        
      <LeftContent />
      <RightContent />
      
    </div>
  )
}

export default Page1Content

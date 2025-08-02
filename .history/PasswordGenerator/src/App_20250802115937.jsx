import React, { useState } from 'react'
import './App.css'

function App() {
 
  // This is the main component of the Password Generator application.
  // It currently renders a title for the applicatio
   const [length,setLength] = useState(10);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start pt-4">
      <h1 className="text-4xl font-bold  text-center">
        Generate Password
      </h1>
    </div>
    </>
  )
}

export default App

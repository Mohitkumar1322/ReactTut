import { useState } from 'react'
import './App.css'

function App() {

  // This is the main application component
  // You can add your components and logic here
  const [color , setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "
      style ={{backgroundColor: color}}>

        div className="fixed flex flex-col  justify-center">
      </div>
      
    </>
  )
}

export default App

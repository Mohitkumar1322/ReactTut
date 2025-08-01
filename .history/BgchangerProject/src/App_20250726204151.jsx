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

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-lg"
          >
            <button onClick={() => setColor("olive")} className="bg-olive-500 text-white px-4 py-2 rounded-lg">Olive</button>
            <button onClick={() => setColor("skyblue")} className="bg-skyblue-500 text-white px-4 py-2 rounded-lg">Sky Blue</button>
            <button onClick={() => setColor("salmon")} className="bg-salmon-500 text-white px-4 py-2 rounded-lg">Salmon</button>
          </div>
      </div>
      
    </>
  )
}

export default App

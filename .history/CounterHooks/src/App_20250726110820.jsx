import { useState } from 'react'
import './App.css'

function App() {

  // Using useState hook to manage the counter state
  // Initializing counter to 0 
  here there two 
  const [counter , setCounter] =useState(0)
 
//let counter =15;

const addValue =() =>{
  setCounter(counter + 1);
  console.log("Counter value:", counter);
}

const removeValue =() =>{
  setCounter(counter-1)
  console.log("Counter value:", counter);
}
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

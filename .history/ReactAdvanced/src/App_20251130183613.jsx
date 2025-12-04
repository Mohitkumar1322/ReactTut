import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandleForm from './components/HandleForm'

function App() {
  const submitHandler =()=>{
    console.log("Form submitted");
  }

  return (
    <>
      <div>
        <HandleForm />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Enter something..." />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App


import './App.css'

function App() {
 
let counter =5;

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={() => counter++}>Add value</button>
      <br />
      <button onClick={() => counter--}>remove value</button>
    </>
  )
}

export default App


import './App.css'

function App() {
 
let counter =5;

const addValue =() =>{
  console.log('add value',Math.random());
}

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App

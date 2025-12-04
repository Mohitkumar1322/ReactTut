import React from 'react'

export const ApiCalling = () => {
    const getData= ()=>{
        const response =fetch('https://jsonplaceholder.typicode.com/todos/1')

    }
  return (
    <div>

    <button onClick={getData}>Get Data Me</button>

    </div>
  )

  
}


export default ApiCalling;
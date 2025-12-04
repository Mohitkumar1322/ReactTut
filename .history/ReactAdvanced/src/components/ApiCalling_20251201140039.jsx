import React from 'react'

export const ApiCalling = () => {
    const getData= async()=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await 
        console.log(response.json());
    }
  return (
    <div>

    <button onClick={getData}>Get Data Me</button>

    </div>
  )

  
}


export default ApiCalling;
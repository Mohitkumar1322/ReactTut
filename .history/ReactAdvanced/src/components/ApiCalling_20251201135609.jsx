import React from 'react'

export const ApiCalling = () => {
    function getData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
  return (
    <div>

    <button onClick={getData}>Get Data Me</button>

    </div>
  )

  
}


export default ApiCalling;
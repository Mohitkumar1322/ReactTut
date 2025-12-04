import React from 'react'

export const ApiCalling = () => {
    function getData(){
        console.log("Button Clicked")
    }
  return (
    <div>

    <button onClick={getData}>Get Data Me</button>

    </div>
  )

  
}


export default ApiCalling;
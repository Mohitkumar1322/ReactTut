import React from 'react'
import axios from 'axios'

export const ApiCalling = () => {
    // const getData= async()=>{
    //     const response =await fetch('https://jsonplaceholder.typicode.com/todos')
    //     const data = await response.json();
    //     console.log(data);
    // }

    //axios using 
    const[data,]

    const getData=async ()=>{
        const response =await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response);
    }


   
    
  return (
    <div>

    <button onClick={getData}>Get Data Me</button>

    </div>
  )

  
}


export default ApiCalling;
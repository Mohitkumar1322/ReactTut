import React, { useEffect, useState } from 'react'


//useeffect gives anothere footpath in a react road where we can run dside by side prcocess 

//react ka truck road m chalta rhga and then useEffect uske baad chlta h

export const UseEffectHook = () => {
    const[num,setNum] = useState(0);


    useEffect(function(){
        console.log('Use Effect is  ');
    },)

    
    //sidestack m store krke rkhta h use effect and side by side chalta h 
  return (
    <div>
        <h1>Hello from use Effect {num}</h1>
        <button onClick={()=>{
            setNum(10)
        }}
        >Click</button>
    </div>
  )
}


export default UseEffectHook;
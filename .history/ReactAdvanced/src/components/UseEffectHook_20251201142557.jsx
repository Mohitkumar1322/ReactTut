import React, { useEffect, useState } from 'react'


//useeffect gives anothere footpath in a react road where we can run dside by side prcocess 

//react ka truck road m chalta rhga and then useEffect uske baad chlta h

export const UseEffectHook = () => {
    const[num,setNum] = useState(0);
    const [num2, setnum2] = useState(0)


    useEffect(function(){
        console.log('Use Effect is  ');
    },[num])

    //above empty array is dependency array to stop useeffect to run multiplle time

    
    //sidestack m store krke rkhta h use effect and side by side chalta h 
  return (
    <div>
        <h1>Hello from use Effect {num}</h1>
        <h2>Hello hheheh {num2}</h2>

        <button onClick={()=>{
            setNum(10)
            //setnum2(33)
        }}
        onDoubleClick={()=>{
            setnum2
        }}
        >Click</button>
    </div>
  )
}


export default UseEffectHook;
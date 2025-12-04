import React, { useEffect } from 'react'


//useeffect gives anothere footpath in a react road where we can run dside by side prcocess 

//react ka truck road m chalta rhga and then useEffect uske baad chlta h

export const UseEffectHook = () => {
    useEffect(function(){
        console.log('Use Effect is running ');
    })
  return (
    <div>UseEffectHook</div>
  )
}


export default UseEffectHook;
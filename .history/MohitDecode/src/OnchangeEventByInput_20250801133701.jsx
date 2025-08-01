import { useState } from 'react';

function OnchangeEventByInput() {
    const [name, setName] = useState('');
    // useState is a hook that allows you to add state to functional components
    const handleChange =(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    return(

        <div>
            <h2>OnChange Event by Input </h2>
            <input type ="text" value={name} onChange={handleChange} placeholder="Type something..." />
            
            <p>You typed: {name}</p>
        </div>
    )
}


export default OnchangeEventByInput;
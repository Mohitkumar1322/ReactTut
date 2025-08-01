import { useState } from 'react';

function OnchangeEventByInput() {
    const [name, setName] = useState('');
    // useState is a hook that allows you to add state to functional components
    
    return(

        <div>
            <h2>OnChange Event by Input </h2>
            <input type ="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type something..." />

            <p>You typed: {name}</p>
        </div>
    )
}


export default OnchangeEventByInput;
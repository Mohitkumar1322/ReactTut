import { useState } from 'react';

function OnchangeEventByInput() {
    const [name, setName] = useState('')
    return(

        <div>
            <h2>OnChange Event by Input </h2>
            <input type ="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Type something..." />
        </div>
    )
}


export default OnchangeEventByInput;
import { useState } from 'react';

function OnchangeEventByInput() {
    const [name, setName] = useState('someone is typing .....')
    return(

        <div>
            <h2>OnChange Event by Input </h2>
            <input type ="text" value=placeholder="Type something..." />
        </div>
    )
}


export default OnchangeEventByInput;
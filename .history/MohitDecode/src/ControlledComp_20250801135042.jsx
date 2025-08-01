import { useState } from 'react';


function ControlledComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('mohit@.com'); 
    const [password, setPassword] = useState('password123');
    return (
        //Controlled components are those components whose state is controlled by React
        //The state of the component is managed by React, and the component re-renders when
        <div>
            <form>
                <input type="text" value ={name}placeholder="Enter your name" />
                <br></br>
                <br></br>
                <input type="text" value ={email} placeholder="Enter your email" />
                <br></br>
                <br></br>
                <input type="password" value ={password} placeholder="Enter your password" />
                <br></br>
                <br></br>
            </form>
        </div>
    )

}

export default ControlledComp;
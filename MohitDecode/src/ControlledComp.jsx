import { useState } from 'react';


function ControlledComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    return (
        //Controlled components are those components whose state is controlled by React
        //The state of the component is managed by React, and the component re-renders when
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log({ name, email, password });
            }}>
                <input type="text" value ={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                <br></br>
                <br></br>
                <input type="text" value ={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                <br></br>
                <br></br>
                <input type="password" value ={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
                <button type="reset" onClick={() => {
                    setName('');    
                    setEmail('');
                    setPassword('');
                }}>Reset</button>
                <br></br>
                <p>{name}</p>
                <p>{email}</p>
                <p>{password}</p>
            </form>
        </div>
    )

}

export default ControlledComp;
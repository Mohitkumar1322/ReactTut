import { useRef } from 'react';

function Usereff(){
     const intervalRef = useRef(0);
    return (
        <div>
        <h1>Usereff Component</h1>
        <p>This is a simple component demonstrating the use of useRef in React.</p>
        </div>
    );
}
export default Usereff;
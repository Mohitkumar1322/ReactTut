
import  { useState } from 'react';


function UseEffectwithProps(){
    const [count, setCount] = useState(0);
    const [data , setData] = useState("Initial Data");

    return (
        <div>
            <h1>Parent Props</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment Count: {count}
            </button>

            
        </div>
    )
}

export default UseEffectwithProps;
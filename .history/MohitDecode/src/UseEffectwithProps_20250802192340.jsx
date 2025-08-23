
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

            <br></br>

            <button onClick={() => setData(" Data",data+1)}>
                Update Data: {data}
            </button>
        </div>
    )
}

export default UseEffectwithProps;
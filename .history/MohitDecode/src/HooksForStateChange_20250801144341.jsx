import { useState } from "react";




function HooksForStateChange(){
    const [count,setcount]  = useState(0);
    const [data,setData]    = useState(0);
    return (
        <div>
            <h1>Hooks for State </h1>
            <p>Count: {count}</p>
            <p>Data: {data}</p>
            <button onClick={() => setcount(count + 1)}>Increment Count</button>
        </div>
    );
}

export default HooksForStateChange;
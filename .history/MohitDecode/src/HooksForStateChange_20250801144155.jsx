import { useState } from "react";

const [count,setcount]  = useState(0);
const [data,setData]    = useState(0);


function HooksForStateChange(){
    return (
        <div>
            <h1>Hooks for State </h1>
            <p>Count: {count}</p>
            <p>Data: {data}</p>
        </div>
    );
}

export default HooksForStateChange;
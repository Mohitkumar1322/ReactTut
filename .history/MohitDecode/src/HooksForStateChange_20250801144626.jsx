import { useEffect, useState } from "react";




function HooksForStateChange(){
    const [count,setcount]  = useState(0);
    const [data,setData]    = useState(0);

    // useState is a hook that allows you to add state to functional components
    useEffect(())
    return (
        <div>
            <h1>Hooks for State </h1>
            <p>Count: {count}</p>
            <p>Data: {data}</p>
            <button onClick={() => setcount(count + 1)}>Increment Count</button>
            <button onClick={() => setData(data + 1)}>Increment Data</button>
        </div>
    );
}

export default HooksForStateChange;
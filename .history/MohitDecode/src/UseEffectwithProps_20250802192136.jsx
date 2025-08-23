
import React from 'react';


function UseEffectwithProps(){
    const [count, setCount] = React.useState(0);

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
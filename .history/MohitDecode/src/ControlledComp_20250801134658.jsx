import { useState } from 'react';

function ControlledComp() {
    return (
        //Controlled components are those components whose state is controlled by React
        //The state of the component is managed by React, and the component re-renders when
        <div>
            <form>
                input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email" />
            </form>
        </div>
    )

}

export default ControlledComp;
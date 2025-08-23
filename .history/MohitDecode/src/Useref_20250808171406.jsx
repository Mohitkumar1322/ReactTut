import { useRef } from 'react';

function Usereff(){
    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h1>UseRef Example</h1>
            <input type="text" ref={inputRef} placeholder="Focus me with button" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}
export default Usereff;
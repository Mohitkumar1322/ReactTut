import { useRef } from 'react';

function Usereff(){
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log("inputRef.current"); // Logs the input element
        inputRef.current.focus();
        inputRef.current.value = "Focused!";
        // You can also manipulate the input value directly
        // inputRef.current.value = "New Value";
        console.log(inputRef.current.value); // Logs the new value

        inputRef.current.style.backgroundColor = "lightblue"; // Change background color
        
    };

    return (
        <div>
            <h1>UseRef Example</h1>
            <input type="text" ref={inputRef}  />
            <br />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}
export default Usereff;
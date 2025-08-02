import  { useState, useCallback } from 'react'
import './App.css'

function App() {
 
  // This is the main component of the Password Generator application.
  // It currently renders a title for the application and a password length input.
   const [length,setLength] = useState(8);
   const [numbersAllowed,setNumbersAllowed] = useState(false);
   const [charactersAllowed,setCharactersAllowed] = useState(false);
   const [password,setPassword] = useState('');
   //this is empty for now, but will be used to store the generated password. we can 
   //store the default password also

   
   const passwordGenerator = useCallback(()=>{
      let pass =""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numbersAllowed) str += "0123456789"
      if(charactersAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?`~"
      for(let i=1;i<=length;i++){
        const randomIndex = Math.floor(Math.random() * str.length);
        pass += str[randomIndex];
      }
      setPassword(pass);
   },[length,numbersAllowed,charactersAllowed,setPassword]);  


   

 return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full  bg-gray-800 text-orange-500 rounded-lg shadow-lg p-6">
        
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center mb-4 underline">
          Password Generator
        </h1>

        {/* Input Box */}
        <div className="flex items-center bg-white rounded overflow-hidden shadow">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full px-4 py-2 text-gray-900 focus:outline-none"
          />
        </div>
        
      </div>
    </div>
  </>
);

}

export default App

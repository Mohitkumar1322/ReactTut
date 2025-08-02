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
      <div className="min-h-screen flex flex-col items-center justify-start pt-4">
      
    </div>
    </>
  )
}

export default App

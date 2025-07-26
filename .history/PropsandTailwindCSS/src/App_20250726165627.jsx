
import './App.css'
import HeroSection from './Hero'


function App() {
  

 

  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
     <button className="bg-blue-500 text-white p-2 rounded">Button</button>


     <br></br>

     <HeroSection propsExample="mohuit" />
    <br></br>

    

    </>
  )
}



export default App

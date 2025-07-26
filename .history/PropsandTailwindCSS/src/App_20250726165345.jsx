
import './App.css'
import HeroSection from './Hero'


function App() {
  

  let arr=[1,2,3,4,5]

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

     <HeroSection propsExample="This is a prop example" />
    <br></br>

    <HeroSection propsExample="This is another prop example" propsObj={arr} />

    </>
  )
}



export default App


import './App.css'
import ChildrenComponent from './ChildComponent'



function App() {
  // let user={
  //   name: "Mohit",
  //   age: 20,
  //   email: "mohit@example.com"
  // }

  // function add(x,y){
  //   return x+y;
  // }

  return (
    <>
      {/* <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Sum of 5 and 10 is: {add(5, 10)}</p> */}

        <div >
        <h1>Welcome to Mohit</h1>
        <p>This is a simple React application.</p>

        <ChildrenComponent name="ANuuu" />
        {/* this is props {name} */}
      </div>

    </>
  )
}

export default App


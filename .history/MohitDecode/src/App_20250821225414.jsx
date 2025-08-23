

// import OnchangeEventByInput from './OnchangeEventByInput'
// import ChildrenComponent from './ChildComponent'
// import ControlledComp from './ControlledComp'
// import CheckBoxReact from './CheckBoxReact'
// import HooksForStateChange from './HooksForStateChange'
// import UseEffectwithProps from './UseEffectwithProps'
// import Usereff from './Useref'
// import UseTransition from './UseTransitionHook'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let user={
  //   name: "Mohit",
  //   age: 20,
  //   email: "mohit@example.com"
  // }

  // function add(x,y){
  //   return x+y;
  // }
let food=['dal','makhani','rajma'];


  return (
    <>
    <div>
      {/* <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Sum of 5 and 10 is: {add(5, 10)}</p> */}

        {/* <div >
        <h1>Welcome to Mohit</h1>
        <p>This is a simple React application.</p>

        <ChildrenComponent name="ANuuu" />
        {/* this is props {name} */}

        {/* <OnchangeEventByInput />
        This is a component that handles input change events */} 

        {/* <ControlledComp /> */}


        {/* <CheckBoxReact /> */}

       
        {/* <HooksForStateChange /> */}
        {/* <UseEffectwithProps /> */}
        {/* <Usereff /> */}
        <h1>There are the healthy food</h1>
        <ul class="list-group">
          {food.map((item)=>{
            return <li class="list-group-item" key={item}>   {item} </li>
          })}
          <textarea class="form-control" rows="3"></textarea>

        </ul>
        
        
          
      </div>

    </>
  )
}

export default App


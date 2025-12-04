import { useState } from "react";
import AddedElement from "./components/AddedElement";
import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";

function App() {
  const todoItems = [
    { task: "Buy Groceries", date: "12th Jan 2023" },
    { task: "Pay Electricity Bill", date: "15th Jan 2023" },
    { task: "Meeting with Bob", date: "20th Jan 2023" },
  ];
  const [todoItems] = useState(todoItems);
  return (
    <div>
      <center>
       <AppName />
        <div class="container text-center">
          <ToDoAdd />
          <br />
         <AddedElement  />
         <br />
        <AddedElement  todoItems={todoItems}/>

        </div>

      </center>
    </div>
  );
}

export default App;

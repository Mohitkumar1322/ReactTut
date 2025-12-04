import { useState } from "react";
import AddedElement from "./components/TodoiItem";
import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";

function App() {
    const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  const [todoItems,setTodoItems] = useState(initialtodoItems);
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

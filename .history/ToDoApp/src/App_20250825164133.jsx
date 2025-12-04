import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      
    }
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added - ${itemName} ${itemDueDate}`);
    const newItem = {name:itemName,dueDate:itemDueDate};
    const newTodoItems = [...todoItems];
    newTodoItems.push(newItem);
    setTodoItems(newTodoItems);

  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems}></TodoItems>
      {todoItems.length === 0 && <wel}
    </center>
  );
}

export default App;
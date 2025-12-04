import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added - ${itemName} ${itemDueDate}`);
    const newItem = {name:itemName,dueDate:itemDueDate};
    const newTodoItems = [...todoItems];
    newTodoItems.push(newItem);
    setTodoItems(newTodoItems);

  }

  const handleDeleteItem=(todoItemNAme)=>{
    const newTodoItems
    console.log(`Item Deleted: ${todoItemNAme}`);


  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
     
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
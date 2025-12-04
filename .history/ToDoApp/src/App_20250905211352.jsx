import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import "./App.css";
import { useState,useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer =(action)=>{
  return [];
}

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodoItems, dispatchTodoIItems] = useReducer(todoItemsReducer, );

  const handleNewItem = (itemName,itemDueDate)=>{
    console.log(`New Item Added - ${itemName} ${itemDueDate}`);
    const newItem = {name:itemName,dueDate:itemDueDate};
    const newTodoItems = [...todoItems];
    newTodoItems.push(newItem);
    setTodoItems(newTodoItems);

  }

  const handleDeleteItem=(todoItemNName)=>{
    //filter method is used untill truthy value is given it will go to array untill new falsy value come
    const newTodoItems = todoItems.filter((item)=>item.name !== todoItemNName);
    console.log(`Item Deleted: ${todoItemNName}`);
    setTodoItems(newTodoItems);
  }

  return (
    <TodoItemsContext.Provider >
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
     
      {<WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import  {TodoItemsContext, } from "../store/todo-items-store"
import { useContext } from "react";

const TodoItems = () => {
  useContext(TodoItemsContext);
  
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
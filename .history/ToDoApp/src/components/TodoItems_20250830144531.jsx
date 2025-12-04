import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import  {TodoItemsContext, } from "../store/todo-items-store"
import { useContext } from "react";

const TodoItems = () => {
  const todoItemsFromContext = useContext(TodoItemsContext);
  console.log(`Todo items from context: ${JSON.stringify(todoItemsFromContext)}`);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
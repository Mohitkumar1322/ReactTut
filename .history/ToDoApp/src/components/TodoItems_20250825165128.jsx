import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, handleDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={handleDeleteClick}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
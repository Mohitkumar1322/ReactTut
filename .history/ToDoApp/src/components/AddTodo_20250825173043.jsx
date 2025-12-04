import { useState } from "react";

function AddTodo( {onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleNameChange =(event) =>{
    setTodoName(event.target.value);
  }

  const handleDueDateChange =(event) =>{
    setTodoDueDate(event.target.value); 
  }

  const handleAddButtonClick=()=>{
    onNewItem(todoName,todoDueDate);
    setTodoName("");
    setTodoDueDate("");
   

  }
  return (
    <div className="container text-center">
      <form className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName}onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value ={todoDueDate}onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
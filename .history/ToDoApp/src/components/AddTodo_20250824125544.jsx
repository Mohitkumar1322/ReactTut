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

  const handle
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={() =>{
            onNewItem("Test","2023-10-10");
          }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
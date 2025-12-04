import { useState,useRef } from "react";

function AddTodo( {onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  //useref hook this useref humko automatically update karne ki suvidha deta hai
  //veryusful when threre are different valu of different state
  const noOfClicks=useRef(0); 

  const handleNameChange =(event) =>{
    setTodoName(event.target.value);
  }

  const handleDueDateChange =(event) =>{
    setTodoDueDate(event.target.value); 
  }

  const handleAddButtonClick=(e)=>{
    e.preventDefault();
    //default behaviour mat kar m dekhunga kya karna 
    onNewItem(todoName,todoDueDate);
    setTodoName("");
    setTodoDueDate("");

  }
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName}onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value ={todoDueDate}onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button type="submit"  className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
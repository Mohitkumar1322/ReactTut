import { useState,useRef } from "react";

function AddTodo( {onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  //useref hook this useref humko automatically update karne ki suvidha deta hai
  //veryusful when threre are different valu of different state i dont want to change

  const noOfClicks=useRef(0); 

  const handleNameChange =(event) =>{
    setTodoName(event.target.value);

    //useref here value is updated
    noOfClicks.current++;
    console.log(noOfClicks.current);
  }

  const handleDueDateChange =(event) =>{
    setTodoDueDate(event.target.value); 
    //useref code
    console.log(`no of updated are :${noOfClicks.current}`);
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
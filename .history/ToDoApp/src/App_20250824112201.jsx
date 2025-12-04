function App() {
  return (
    <div>
      <center>
        <h1 class="todo-container">ToDo App</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col-4">
              <input type ="text" placeholder="Add a new task" class="form-control"/>
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-danger">Add</button></div>
          </div>

          <div class="row">
            <div class="col-4">
              Buy Groceries
            </div>
            <div class="col-4">
              12th Jan 2023
            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-danger">Add</button></div>
          </div>

        </div>

      </center>
    </div>
  );
}

export default App;

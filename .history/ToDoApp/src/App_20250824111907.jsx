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
              < class="container mt-3">
  <label for="datepicker" class="form-label">Pick a Date</label>
  <input type="text" class="form-control" id="datepicker" placeholder="Select date">

            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-danger">Danger</button></div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;

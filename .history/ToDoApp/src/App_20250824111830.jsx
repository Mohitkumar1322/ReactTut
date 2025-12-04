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
              <div class="container mt-3">
  <label for="date" class="form-label">Select Date</label>
  <input type="date" class="form-control" id="date">
</div>
            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-danger">Danger</button></div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;

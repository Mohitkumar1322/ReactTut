function ToDoAdd(){
    return (
        <div>
            <div class="row">
            <div class="col-4">
              <input type ="text" placeholder="Add a new task" class="form-control"/>
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-success">Add</button></div>
          </div>
          <br />
          <div class="row">
            <div class="col-4">
              Buy Groceries
            </div>
            <div class="col-4">
              12th Jan 2023
            </div>
            <div class="col-2"><button type="button" class="btn btn-outline-danger">Delete</button></div>
          </div>
        </div>
    )
}
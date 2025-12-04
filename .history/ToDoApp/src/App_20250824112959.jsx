import AddedElement from "./components/AddedElement";
import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";

function App() {
  return (
    <div>
      <center>
       <AppName />
        <div class="container text-center">
          <ToDoAdd />
          <br />
         <AddedElement  />
          <AddedElement  />

        </div>

      </center>
    </div>
  );
}

export default App;

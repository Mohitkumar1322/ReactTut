
import User from './User';

const App= ()=>{
  return (
    <div>
      <h1>Hello, Vite!</h1>
      
      <User />
      <p>This is a simple React application using Vite.</p>
    </div>
  );
}

function User2(){
  return (
    <div>
      <h2>User 2</h2>
      <p>This is the second user component.</p>
    </div>
  );
}
export default App;


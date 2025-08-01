const ChildrenComponent = (props) => {
  console.log("Props received in ChildComponent:", props);
  return (
    <div>
      <h2>Child Component</h2>
      <p>This is a child component.</p>

      {/* this is props {props.name} and coming from App.jsx where name is passed as "ANuuu" */}
      <p>Received prop: {props.name}</p>
    </div>
  );
}



export default ChildrenComponent;
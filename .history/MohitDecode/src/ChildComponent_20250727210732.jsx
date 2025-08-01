const ChildrenComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>This is a child component.</p>
      <p>Received prop: {props.name}</p>
    </div>
  );
}



export default ChildrenComponent;
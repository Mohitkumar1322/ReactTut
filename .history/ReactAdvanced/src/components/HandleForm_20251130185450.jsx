import React from 'react'

export const HandleForm = () => {


const[title,setTitle]=React.useState("");


const submitHandler =()=>{
    console.log("Form submitted");
  }
  //this is submitted and form is reloaded by default
  return (
    <div><form onSubmit={(e)=>{
        //this e.preventDefault() prevents the default behavior of form submission
        e.preventDefault();
        //not allowing to reload the page on form
        submitHandler();
    }}>
          <input type="text" placeholder="Enter something..." value={title} onChange={(e)=>{
            setTitle(e.target.value);

            setTitle("");
          }} />
          {/* <input type="email" placeholder="Enter your email..." /> */}
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default HandleForm;
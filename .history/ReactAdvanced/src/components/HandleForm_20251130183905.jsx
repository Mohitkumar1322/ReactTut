import React from 'react'

export const HandleForm = () => {
const submitHandler =()=>{
    console.log("Form submitted");
  }
  //this is submitted and form is reloaded by default
  return (
    <div><form onSubmit={()=>}
}>
          <input type="text" placeholder="Enter something..." />
          <input type="email" placeholder="Enter your email..." />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default HandleForm;
import React from 'react'

export const HandleForm = () => {
const submitHandler =()=>{
    console.log("Form submitted");
  }
  return (
    <div><form onSubmit={submitHandler}>
          <input type="text" placeholder="Enter something..." />
          <input type="email" placeholder="Enter your email..." />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default HandleForm;
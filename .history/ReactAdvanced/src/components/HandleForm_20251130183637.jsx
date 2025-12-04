import React from 'react'

export const HandleForm = () => {
  return (
    <div><form onSubmit={submi}>
          <input type="text" placeholder="Enter something..." />
          <input type="email" placeholder="Enter your email..." />
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default HandleForm;
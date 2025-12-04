import React from 'react'

export const LocalStorage = () => {

    localStorage.setItem("name","John Doe");//store value in local storage in key value pair
    
    const name = localStorage.getItem("name");
    console.log(name);
  return (
    <div>LocalStorage</div>
  )
}

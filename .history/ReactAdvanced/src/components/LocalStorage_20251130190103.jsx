import React from 'react'

export const LocalStorage = () => {

    localStorage.setItem("name","John Doe");//
    const name = localStorage.getItem("name");
    console.log(name);
  return (
    <div>LocalStorage</div>
  )
}

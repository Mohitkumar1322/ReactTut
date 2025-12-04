import React from 'react'
import Card from './components/card';
export const App = () => {
  return (
    <div className='parent'>
      
      <Card user="Mohit Kumar" age={30} />
      <Card user="John Doe" />
      <Card user="Jane Smith" />
      
    </div>
  )
}


export default App;
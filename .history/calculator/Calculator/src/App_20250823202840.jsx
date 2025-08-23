

import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';





function App() {

  let [calVal,setCalval] = useState("");

  return (
   <div className={styles.calculator}>
    <Display calVal={ca/>
    <ButtonsContainer />
   </div>
  )
}

export default App
